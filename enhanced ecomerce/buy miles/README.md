# DOCUMENTACIÓN TÉCNICA ECOMMERCE GA4 - FLUJO DE COMPRA DE MILLAS (ConnectMiles)

Este archivo contiene la estructura completa del dataLayer.push() para los eventos de e-commerce de ConnectMiles.

Ambiente: GTM Client-Side (Web) y GTM Server-Side.
Moneda Principal: USD.

## 1. Definiciones de Variables Clave

Estas variables dinámicas deben ser proporcionadas por el código de tu sitio web (Back-end/Front-end).

| Variable JS | Tipo | Requisito | Descripción |
| :--- | :--- | :--- | :--- |
| `value` | `number` | **OBLIGATORIO** | Valor de la venta de millas en **Dólares (USD)**. |
| `tax` | `number` | **PURCHASE** | Valor en dólares de los impuestos de la transacción. |
| `local_value` | `number` | Custom | Valor de la venta de millas en **moneda local**. Mapeado como `custom_local_value`. |
| `connectmiles_amount` | `number` | Custom | Valor en **millas** que se está comprando. Mapeado como `custom_connectmiles_amount`. |
| `coupon` | `string` | OPCIONAL | Código de cupón aplicado a la venta. |
| `discount` | `number` | OPCIONAL | Cantidad del descuento monetario aplicado. |
| `index` | `number` | OPCIONAL | Posición del paquete de millas en la lista/modal (desde 1). |
| `transaction_id` | `string` | **PURCHASE** | Identificador único de la venta (debe ser estático). |

***

## 2. Estructuras del dataLayer.push

### A. Evento: view_item (Selección de Millas)
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'view_item',
    'ecommerce': {
        'currency': 'USD',
        'value': value,
        'custom_local_value': local_value,
        'custom_connectmiles_amount': connectmiles_amount,
        'coupon': coupon, 
        'items': [{
            'item_id': 'buy_miles',
            'item_name': 'Buy Miles',
            'price': value,
            'quantity': 1,
            'index': index,
            'item_brand': 'ConnectMiles',
            'discount': discount,
        }]
    }
});
```

### B. Evento: add_to_cart (Avanzar a Pago Seguro)
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'add_to_cart',
    'ecommerce': {
        'currency': 'USD',
        'value': value,
        'custom_local_value': local_value,
        'custom_connectmiles_amount': connectmiles_amount,
        'coupon': coupon, 
        'items': [{
            'item_id': 'buy_miles',
            'item_name': 'Buy Miles',
            'price': value,
            'quantity': 1,
            'index': index,
            'item_brand': 'ConnectMiles',
            'discount': discount,
        }]
    }
});
```

### C. Evento: remove_from_cart (Cambio de Selección)
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'remove_from_cart',
    'ecommerce': {
        'currency': 'USD',
        'value': value,
        'custom_local_value': local_value,
        'custom_connectmiles_amount': connectmiles_amount,
        'coupon': coupon, 
        'items': [{
            'item_id': 'buy_miles',
            'item_name': 'Buy Miles',
            'price': value,
            'quantity': 1,
            'index': index,
            'item_brand': 'ConnectMiles',
            'discount': discount,
        }]
    }
});
```

### D. Evento: purchase (Transacción Finalizada)
```javascript
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'purchase',
    'ecommerce': {
        // --- Parámetros de Nivel de Evento (GA4 Estándar, transaction_id y tax son clave) ---
        'transaction_id': transaction_id,
        'currency': 'USD',
        'value': value,
        'coupon': coupon,
        'tax': tax,     
        
        // --- Parámetros Custom a Nivel de Evento (Para GTM Server-Side) ---
        'custom_local_value': local_value,
        'custom_connectmiles_amount': connectmiles_amount,
        
        'items': [{
            'item_id': 'buy_miles',
            'item_name': 'Buy Miles',
            'price': value,
            'quantity': 1,
            'index': index,
            'item_brand': 'ConnectMiles',
            'discount': discount,
        }]
    }
});
```

***

# 3. Referencia GA4: Evento Custom de Conversión `buy_miles`

El evento `purchase` debe ser utilizado en **GTM** para disparar un
**Tag de Evento GA4 llamado `buy_miles`**.

  --------------------------------------------------------------------------------------------
  Parámetro GA4           Origen (Data Layer Variable)                 Tipo en GA4
  ----------------------- -------------------------------------------- -----------------------
  `local_value`           `{{ecommerce.custom_local_value}}`           Métrica personalizada
                                                                       (numérica)

  `connectmiles_amount`   `{{ecommerce.custom_connectmiles_amount}}`   Métrica personalizada
                                                                       (numérica)
  --------------------------------------------------------------------------------------------

------------------------------------------------------------------------

# 4. Observaciones de Implementación (Sesión de Validación en Staging)

**Fecha de validación:** 12 de marzo de 2026\
**Ambiente revisado:** Staging

Durante la revisión técnica posterior a la implementación, se validó que
los eventos GA4 estuvieran siendo enviados correctamente al `dataLayer`.

En términos generales, **los eventos y la estructura del objeto
`ecommerce` funcionan correctamente**, sin embargo se identificaron
comportamientos que **no formaban parte de la especificación original**.

------------------------------------------------------------------------

## 4.1 Uso del parámetro `coupon` en el evento `view_item`

Se observó que el parámetro `coupon` está siendo utilizado con valores
como:

    BMC02

Este valor parece estar indicando **la opción de paquete de millas
seleccionada** (por ejemplo paquete #2).

Según la especificación original:

  Parámetro   Uso definido
  ----------- --------------------------------------
  `coupon`    Código de cupón aplicado a la compra

Por lo tanto:

-   `coupon` **no debería utilizarse para identificar paquetes de
    millas**
-   Debe reservarse únicamente para **códigos promocionales reales**

------------------------------------------------------------------------

## 4.2 Uso de `transaction_id` con PNR ficticio en el evento `purchase`

Se observó que el campo `transaction_id` está siendo poblado con un
**PNR ficticio generado por el sistema**.

Esto **no fue solicitado en la especificación original**.

### Riesgos identificados

-   Posibles duplicados de transacciones en GA4\
-   Conflicto con identificadores de compra de boletos\
-   Dificultad para distinguir compras de millas vs compras de vuelos

------------------------------------------------------------------------

## 4.3 Workaround temporal desde analítica

Para evitar duplicados, desde analítica se implementará un **append de
timestamp al transaction_id**.

Ejemplo conceptual:

    transaction_id_original + timestamp

Ejemplo:

    PNRTEST123_20260312T153000

Esto permitirá:

-   Garantizar unicidad del `transaction_id`
-   Evitar colisiones con otros eventos `purchase`
-   Mantener consistencia en GA4

------------------------------------------------------------------------

## 4.4 Estado general de la implementación

  Elemento                Estado
  ----------------------- -------------------------------
  Eventos GA4             Correctos
  Estructura ecommerce    Correcta
  Parámetros custom       Correctos
  Uso de coupon           Diferente a la especificación
  Uso de transaction_id   Usando PNR ficticio

------------------------------------------------------------------------

# 5. Historial de Versiones

  -----------------------------------------------------------------------
  Versión                 Fecha                   Descripción
  ----------------------- ----------------------- -----------------------
  1.0                     Implementación inicial  Documentación de
                                                  eventos GA4 para compra
                                                  de millas

  1.1                     12 Mar 2026             Observaciones
                                                  detectadas en
                                                  validación de staging
  -----------------------------------------------------------------------
