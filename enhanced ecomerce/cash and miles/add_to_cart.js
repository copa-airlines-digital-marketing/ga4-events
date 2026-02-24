/**
 * @description Se ejecuta cuando el usuario hace click el boton lo lleva a secure.
 */

/**
 * @var {number} value - [OBLIGATORIO] number valor de la venta de millas en dolares
 */
let value = 100.0;
/**
 * @var {number} local_value - [OBLIGATORIO] valor de la venta de millas en moneda local
 */
let local_value = 20000.0;
/**
 * @var {number} item_id - [OBLIGATORIO] valor en millas que se esta comprando
 */
let connectmiles_amount = 0;
/**
 * @var {string | null | undefined} coupon - [OPCIONAL] ID único del producto (SKU).
 */
let coupon = "CMBM25";
/**
 * @var {number | null | undefined} discount - [OPCIONAL] cantidad del descuento dado por el cupo o otras ofertas
 */
let discount = 50.02;
/**
 * @var {number} index - [REQUIRED] posicion en la lista del producto desde 1 a n
 */
let index = 0;

/**
 * @var {string} item_variant - [REQUIRED] concatenación de la fase y el porcentaje seleccionado, por ejemplo: "Phase 1 - N/A", "Phase 2 - 80%", etc.
 */
let item_variant = phase + " - " + percent_selected;
tem_variant = "Phase 1";

// Archivo: add_to_cart.js
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  event: "add_to_cart", // Evento GA4
  ecommerce: {
    // --- Parámetros de Nivel de Evento (Monetarios) ---
    currency: "USD",
    value: value,
    custom_local_value: local_value,
    custom_connectmiles_amount: connectmiles_amount,
    coupon: coupon,

    items: [
      {
        // --- Parámetros de Nivel de Producto (Se repiten) ---
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
