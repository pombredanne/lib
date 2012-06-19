(function(jQury) {
    $.fn.codefetch = function(user, repos, path, lang) {
        var _this = this;
        var url = "https://api.github.com/repos/" + user + "/" + repos + "/contents/" + path

        $.ajax({
            url: url,
            async: false,
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Accept", "application/vnd.github.beta.raw");
            },
            success: function(content) {
                content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                _this.append(content);
                _this.attr("class", "brush:" + lang);
            },
            error: function() {
                _this.append("Can't retrieve from " + url);
                _this.attr("class", "brush:" + lang);
            }
        });    

    }

})(jQuery);
