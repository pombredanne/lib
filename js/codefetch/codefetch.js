var codefetchId;
var codefetchLang;

function codefetchAddContent(id, content) {
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    $("#" + id).append(content);
    $("#" + id).attr("class", "brush:" + codefetchLang);
}

function codefetchJSONPCallback(json) {
    codefetchAddContent(codefetchId, window.atob(json.data.content.replace(/\n/g, "")));
}

(function(jQury) {
    $.fn.codefetch2 = function(url) {
        var _this = this;
        $.ajax({
            url: url,
            async: false,
            dataType: text,
            success: function(content) {
                codefetchAddContent(_this.attr("id"), content);
            },
            error: function() {
                _this.append("Can't retrieve from " + url);
                _this.attr("class", "brush:" + lang);
            }
        });    
    }

    $.fn.codefetch = function(user, repos, path, lang) {
        codefetchId = this.attr("id");
        codefetchLang = lang;
        var url = "https://api.github.com/repos/" + user + "/" + repos + "/contents/" + path + "?callback=codefetchJSONPCallback";
        var script = "<script type=\"text/javascript\" src=\"";
        script += url;
        script += "\"></script>";
        this.after(script);
    }

})(jQuery);
