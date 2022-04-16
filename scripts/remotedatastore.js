(function(window) {
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error("No remote URL supplied.");
        }
        this.serverUrl = url;
    }
    RemoteDataStore.prototype.add = function(key, val) {
        fetch(this.serverUrl, val);


    };
    RemoteDataStore.prototype.getAll = function(cb) {
        // Здесь будет находиться код
        $.get(this.serverUrl, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse)
        });
    };
    RemoteDataStore.prototype.get = function(key, cb) {
        $.get(this.serverUrl + '/' + key, function(serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };
    RemoteDataStore.prototype.remove = function(key) {
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };
    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);