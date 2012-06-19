(function(jQury) {
    $.fn.codefetch = function(url, lang) {
        var _this = this;

        $.ajax({
            url: url,
            dataType: 'text',
            async: false,
            success: function(text) {
                text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                _this.append(text);
                _this.attr("class", "brush:" + lang);
            },
            error: function() {
                _this.append("Can't retrieve from " + url);
                _this.attr("class", "brush:" + lang);
            }
        });    
    }

})(jQuery);
