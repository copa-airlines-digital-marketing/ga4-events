/**
* @description Se ejecuta cuando el usuario regresa de secure y cambia el valor de millas previamente seleccionado
*/

/**
  * @var {number} value - [OBLIGATORIO] number valor de la venta de millas en dolares
*/
let value = 100.00
/**
  * @var {number} local_value - [OBLIGATORIO] valor de la venta de millas en moneda local
*/
let local_value = 20000.00
/**
  * @var {number} item_id - [OBLIGATORIO] valor en millas que se esta comprando
*/
let connectmiles_amount = 0
/**
  * @var {string | null | undefined} coupon - [OPCIONAL] ID único del producto (SKU).
*/
let coupon = 'CMBM25'
/**
 * @var {number | null | undefined} discount - [OPCIONAL] cantidad del descuento dado por el cupo o otras ofertas
 */
let discount = 50.02
/**
 * @var {number} discount - [REQUIRED] posicion en la lista del producto desde 1 a n
 */
let index = 0

// Archivo: remove_from_cart.js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'remove_from_cart', // Evento GA4
    'ecommerce': {
        // --- Parámetros de Nivel de Evento (Monetarios) ---
        'currency': 'USD',
        'value': value,
        'custom_local_value': local_value,
        'custom_connectmiles_amount': connectmiles_amount,
        'coupon': coupon, 
        
        'items': [{
            // --- Parámetros de Nivel de Producto (Se repiten) ---
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