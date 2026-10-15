"use strict";

window.addEventListener("DOMContentLoaded", function () {

    var quantityField = document.getElementById("quantity");
    var productField = document.getElementById("product");
    var calcButton = document.getElementById("calc-button");
    var errorMessage = document.getElementById("error-message");
    var result = document.getElementById("result");
    var quantityPattern = /^[1-9][0-9]*$/;

    function calculateCost() {

        var quantityText = quantityField.value.trim();
        var price = parseInt(productField.value, 10);
        var quantity;
        var cost;

        errorMessage.textContent = "";
        result.textContent = "";

        if (!quantityPattern.test(quantityText)) {
            errorMessage.textContent = "Ошибка: введите количество товара целым положительным числом.";
            return;
        }

        quantity = parseInt(quantityText, 10);
        cost = price * quantity;

        result.textContent = "Стоимость заказа: " + cost + " руб.";
    }

    calcButton.addEventListener("click", calculateCost);

});
