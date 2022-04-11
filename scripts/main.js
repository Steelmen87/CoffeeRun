(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());

    var elem = document.querySelector('input[type="range"]');
    var rangeValue = function() {
        var newValue = elem.value;
        console.log(newValue)
        var target = document.querySelector('.valueRange');
        target.innerHTML = newValue;
    }

    elem.addEventListener("input", rangeValue);


    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);

})(window);