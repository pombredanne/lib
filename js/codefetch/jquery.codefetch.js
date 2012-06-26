var codefetchId;
var codefetchLang;

function codefetchAddContent(id, content) {
    content = content.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    $("#" + id).append(content);
    if (codefetchLang != null) {
        $("#" + id).attr("class", "brush:" + codefetchLang);
    }
}

function codefetchJSONPCallback(json) {
    codefetchAddContent(codefetchId, window.atob(json.data.content.replace(/\n/g, "")));
}

(function(jQury) {
    jQuery.fn.codefetch = function(user, repos, path, lang) {
        codefetchId = this.attr("id");
        codefetchLang = lang;

        var url = "https://api.github.com/repos/" + user + "/" + repos + "/contents/" + path + "?callback=codefetchJSONPCallback";
        var script = "<script type=\"text/javascript\" src=\"" + url + "\"></script>";

        this.after(script);
    }

})(jQuery);
