(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var myTruck = new Truck('ncc-1701', new DataStore());

    var elem = document.querySelector('input[type="range"]');
    var rangeValue = function() {
        var newValue = elem.value;
        /* console.log(newValue) */
        var target = document.querySelector('.valueRange');
        target.innerHTML = newValue;
    }

    elem.addEventListener("input", rangeValue);


    window.myTruck = myTruck;
    var checkList = new CheckList(CHECKLIST_SELECTOR)
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });


})(window);