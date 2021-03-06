(function(window) {
    'use strict'
    var App = window.App || {}
    var $ = window.jQuery;


    function FormHandler(selector) {
        if (!selector) {
            throw new Error("No selector provider");
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error("Could not find element with selector: " + selector);
        }
    }
    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting inputhandler for form ');
        this.$formElement.on('input', '[name="emailAddress"]', function(event) {
            var emailAddress = event.target.value;
            console.log(emailAddress)
        })
    }
    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log("Setting submit handler for form");
        this.$formElement.on("submit", function(event) {
            event.preventDefault();
            var data = {};
            $(this)
                .serializeArray()
                .forEach(function(item) {
                    data[item.name] = item.value;
                    console.log(item.name + " is " + item.value);
                });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;
})(window);