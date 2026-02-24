# DOCUMENTACIÓN TÉCNICA ECOMMERCE GA4 - FLUJO CASH AND MILES (ConnectMiles)

Este archivo contiene la estructura completa del dataLayer.push() para los eventos de e-commerce del flujo Cash and Miles de ConnectMiles.

Ambiente: GTM Client-Side (Web) y GTM Server-Side.
Moneda Principal: USD.

## 1. Definiciones de Variables Clave

Estas variables dinámicas deben ser proporcionadas por el código de tu sitio web (Back-end/Front-end).

| Variable JS           | Tipo     | Requisito       | Descripción                                                                                                |
| :-------------------- | :------- | :-------------- | :--------------------------------------------------------------------------------------------------------- |
| `value`               | `number` | **OBLIGATORIO** | Valor de la venta de millas en **Dólares (USD)**.                                                          |
| `local_value`         | `number` | **OBLIGATORIO** | Valor de la venta de millas en **moneda local**. Mapeado como `custom_local_value`.                        |
| `connectmiles_amount` | `number` | **OBLIGATORIO** | Valor en millas que se está comprando. Mapeado como `custom_connectmiles_amount`.                          |
| `coupon`              | `string` | OPCIONAL        | ID único del producto (SKU).                                                                               |
| `discount`            | `number` | OPCIONAL        | Cantidad del descuento dado por el cupón o otras ofertas.                                                  |
| `index`               | `number` | **REQUIRED**    | Posición en la lista del producto desde 1 a n.                                                             |
| `phase`               | `string` | **REQUIRED**    | Fase en la que sucede Cash and Miles, por ejemplo: Phase 1, Phase 2, etc.                                  |
| `percent_selected`    | `string` | **REQUIRED**    | Porcentaje de millas seleccionadas por el usuario. Fase 1: N/A; Fase 2: 0%, 20%, 40%, 60%, 80% o 100%.     |
| `item_variant`        | `string` | **REQUIRED**    | Concatenación de la fase y el porcentaje seleccionado, por ejemplo: "Phase 1 - N/A", "Phase 2 - 80%", etc. |

---

## 2. Estructuras del dataLayer.push

### A. Evento: add_to_cart

Debe ejecutarse si Miles and Cash esta preseleccionado y en cualquier otra interaccion que cambie el monto en dolares a pagar por las millas.

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "add_to_cart", // Evento GA4
  ecommerce: {
    currency: "USD",
    value: value,
    custom_local_value: local_value,
    custom_connectmiles_amount: connectmiles_amount,
    coupon: coupon,
    items: [
      {
        item_id: "miles",
        item_name: "Miles",
        item_category: "Cash and Miles",
        price: value,
        quantity: 1,
        index: index,
        item_brand: "ConnectMiles",
        discount: discount,
        item_variant: "item_variant",
        custom_item_connectmiles: connectmiles_amount,
      },
    ],
  },
});
```

### B. Evento: remove_from_cart (Cambio de Selección)

Se debe ejecutar cuando el usuario selecciona el radio button "Solo millas ", cuando hace click en el boton "Eliminar selección" y en las demas interacciones que cambie el monto en dolares a pagar por las millas.

```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "remove_from_cart", // Evento GA4
  ecommerce: {
    currency: "USD",
    value: value,
    custom_local_value: local_value,
    custom_connectmiles_amount: connectmiles_amount,
    coupon: coupon,
    items: [
      {
        item_id: "miles",
        item_name: "Miles",
        item_category: "Cash and Miles",
        price: value,
        quantity: 1,
        index: index,
        item_brand: "ConnectMiles",
        discount: discount,
        item_variant: "item_variant",
        custom_item_connectmiles: connectmiles_amount,
      },
    ],
  },
});
```

---

## 3. Archivos de la carpeta

| Archivo               | Evento GA4       | Cuándo disparar                                                                           |
| :-------------------- | :--------------- | :---------------------------------------------------------------------------------------- |
| `add_to_cart.js`      | add_to_cart      | Cuando el usuario hace click en el botón que lo lleva a secure.                           |
| `remove_from_cart.js` | remove_from_cart | Cuando el usuario regresa de secure y cambia el valor de millas previamente seleccionado. |

## 4. Parámetros custom para GTM / GA4

| Parámetro GA4            | Origen (Data Layer Variable)                    | Tipo en GA4                           |
| :----------------------- | :---------------------------------------------- | :------------------------------------ |
| local_value              | {{ecommerce.custom_local_value}}                | Métrica Personalizada (Numérica)      |
| connectmiles_amount      | {{ecommerce.custom_connectmiles_amount}}        | Métrica Personalizada (Numérica)      |
| item_variant             | {{ecommerce.items[0].item_variant}}             | Dimensión (Texto)                     |
| custom_item_connectmiles | {{ecommerce.items[0].custom_item_connectmiles}} | Métrica/Dimensión según configuración |
