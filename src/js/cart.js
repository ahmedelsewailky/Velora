/**
 * Shopping Cart Functionality
 *
 * This script manages the shopping cart interactions, including:
 * - Updating item prices based on quantity changes
 * - Calculating subtotal, delivery cost, and total price
 * - Handling quantity increment and decrement
 * - Removing items from the cart
 *
 * @version 1.0
 */

$(function () {
    /**
     * Updates the total price of the cart.
     * It sums up the price of all items based on their quantity
     * and adds the delivery cost.
     */
    function updateTotal() {
        let subtotal = 0;
        $(".cart-item").each(function () {
            let price = parseFloat($(this).find(".price").attr("data-price"));
            let quantity = parseInt($(this).find(".quantity-value").val()) || 1;
            subtotal += price * quantity;
        });

        $(".subtotal-price").text(`$${subtotal.toFixed(2)}`);

        // Get delivery price and convert it to a number
        let delivery = parseFloat($(".delivery-price").text().replace("$", "")) || 0;

        // Calculate total price
        let total = subtotal + delivery;
        $(".total-price").text(`$${total.toFixed(2)}`);
    }

    /**
     * Updates the displayed price of a cart item.
     *
     * @param {jQuery} parent - The jQuery object of the cart item container.
     */
    function updateItemPrice(parent) {
        let priceElement = parent.find(".price");
        let basePrice = parseFloat(priceElement.attr("data-price"));
        let quantity = parseInt(parent.find(".quantity-value").val()) || 1;

        priceElement.text(`$${(basePrice * quantity).toFixed(2)}`);
        updateTotal();
    }

    // Event: Handle quantity increase and decrease buttons
    $(".quantity-input button").click(function () {
        let parent = $(this).closest(".cart-item");
        let quantityInput = parent.find(".quantity-value");
        let quantity = parseInt(quantityInput.val()) || 1;

        if ($(this).hasClass("increase")) {
            quantity++;
        } else if ($(this).hasClass("decrease") && quantity > 1) {
            quantity--;
        }

        quantityInput.val(quantity);
        updateItemPrice(parent);
    });

    // Event: Handle direct input change in quantity field
    $(".quantity-value").on("input", function () {
        let parent = $(this).closest(".cart-item");
        let quantity = parseInt($(this).val());

        if (isNaN(quantity) || quantity < 1) {
            $(this).val(1);
        }

        updateItemPrice(parent);
    });

    // Event: Handle item removal from cart
    $(".item-remove-btn").click(function () {
        $(this).closest(".cart-item").remove();
        updateTotal();
    });

    // Initial total calculation
    updateTotal();
});
