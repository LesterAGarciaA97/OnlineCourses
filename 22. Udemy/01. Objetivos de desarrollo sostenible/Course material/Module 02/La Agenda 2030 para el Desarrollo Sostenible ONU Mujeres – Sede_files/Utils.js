var utilities = {};
$(function () {
    utilities.hashSearch = new function() {
        var params;

        this.set = function(key, value) {
            params[key] = value;
            this.push();
        };

        this.remove = function(key) {
            delete params[key];
            this.push();
        };


        this.get = function(key) {
            return params[key];
        };

        this.keyExists = function(key) {
            return params.hasOwnProperty(key);
        };

        this.push = function() {
            var hashBuilder = [], key, value;

            for (key in params)
                if (params.hasOwnProperty(key)) {
                    key = escape(key), value = escape(params[key]); // escape(undefined) == "undefined"
                    hashBuilder.push(key + ((value !== "undefined") ? '=' + value : ""));
                }

            window.location.hash = hashBuilder.join("&");
        };

        (this.load = function() {
            params = {};
            var hashStr = window.location.hash, hashArray, keyVal;
            hashStr = hashStr.substring(1, hashStr.length);
            hashArray = hashStr.split('&');

            for (var i = 0; i < hashArray.length; i++) {
                keyVal = hashArray[i].split('=');
                params[unescape(keyVal[0])] = (typeof keyVal[1] != "undefined") ? unescape(keyVal[1]) : keyVal[1];
            }
        })();
    };

    utilities.getParameterByName = function(name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
});