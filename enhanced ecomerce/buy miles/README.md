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

## 3. Referencia GA4: Evento Custom de Conversión buy_miles

El evento purchase debe ser utilizado en GTM para disparar un Tag de Evento GA4 llamado buy_miles.

| Parámetro GA4 | Origen (Data Layer Variable) | Tipo en GA4 |
| :--- | :--- | :--- |
| local_value | {{ecommerce.custom_local_value}} | Métrica Personalizada (Numérica) |
| connectmiles_amount | {{ecommerce.custom_connectmiles_amount}} | Métrica Personalizada (Numérica) |