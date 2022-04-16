(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders ';
    var App = window.App;
    var Truck = App.Truck;
    var Validation = App.Validation;
    var DataStore = App.DataStore;
    var RemoteDataStore = App.RemoteDataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var remoteDS = new RemoteDataStore(SERVER_URL);
    var myTruck = new Truck('ncc-1701', remoteDS);

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
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));

    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function(data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });
    formHandler.addInputHandler(Validation.isCompanyEmail)

})(window);