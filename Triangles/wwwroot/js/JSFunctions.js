// JSFunctions JavaScript Class
var JSFunctions = (function () {

    // Constructor
    var cls = function () {

        // Sets the variable fn to be equal to this class, which will allow 
        // this classes methods to be called from within its methods
        var fn = this;  // Not used in this demo, but here for clarity

        // AjaxPOST is a wrapper for the JQuery Ajax method.
        this.AjaxPOST = function (ajaxUrl, ajaxAntiForgeryToken, ajaxData, successCallback, errorCallback) {
            $.ajax({
                type: "POST",
                url: ajaxUrl,
                async: true,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("XSRF-TOKEN", ajaxAntiForgeryToken);
                },
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                data: ajaxData,
                errorCallback: errorCallback,
                successCallback: successCallback,
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    var hasCallback = (this.errorCallback === null || this.errorCallback === undefined ? false : true);
                    if (hasCallback) {
                        this.errorCallback(XMLHttpRequest, textStatus, errorThrown);
                    } else {
                        alert("Request: " + XMLHttpRequest.responseText + "\n\nStatus: " + textStatus + "\n\nError: " + errorThrown);
                    }
                },
                success: function (result) {
                    var hasCallback = (this.successCallback === null || this.successCallback === undefined ? false : true);
                    var hasResult = (result.d === null || result.d === undefined ? false : true);
                    if (!hasResult)
                        hasResult = (result === null || result === undefined ? false : true);

                    if (hasCallback && hasResult) {
                        this.successCallback(result);
                    } else if (hasCallback) {
                        this.successCallback();
                    }
                }
            });
        };

        // IsEmpty checks the state of the object, returning true if empty or false if not empty
        this.IsEmpty = function (val) {
            // test results
            //---------------
            // []        true, empty array
            // {}        true, empty object
            // null      true
            // undefined true
            // ""        true, empty string
            // ''        true, empty string
            // 0         false, number
            // true      false, boolean
            // false     false, boolean
            // Date      false
            // function  false

            if (val === undefined)
                return true;

            if (typeof (val) === 'function' || typeof (val) === 'number' || typeof (val) === 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
                return false;

            if (val === null || val.length === 0)        // null or 0 length array
                return true;

            if (typeof (val) === "object") {
                // empty object

                var r = true;

                for (var f in val)
                    r = false;

                return r;
            }

            return false;
        }

    };
    // End of Constructor

    return cls;
})();