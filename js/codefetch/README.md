jQuery Plugin CodeFetch
======================
CodeFetch is a jQuery Plugin which enables you to show source code at github on your web site easily.
 
Usage
------
write html as follows.(of course you need load jquery and this plugin as usual)

#### sample.html ####
    <pre id="foo"></pre>
    <script type="text/javascript" charset="utf-8">
        $("#foo").codefetch("sakitake", "lib", "js/codefetch/jquery.codefetch.js", "javascript");
    </script>

This sample fetches the source code from [https://github.com/sakitake/lib/blob/master/js/codefetch/jquery.codefetch.js](https://github.com/sakitake/lib/blob/master/js/codefetch/jquery.codefetch.js) itself.

Parameters
----------------
 
    $(<id>).codefetch(user, repos, path, lang);
 
+   `user` :
    user name of the github.
 
+   `repos` :
    repository of the github.

+   `path` :
    path of the source code to show.

+   `lang` :
    language of source code. if you want to use Syntax Highlighter, please specify this parameter.
    Otherwise use null and shown as simple text.


Demo
----------------
[Demo Page](http://ec2-23-22-142-242.compute-1.amazonaws.com/fapp/codefetch)


Sample HTML
----------------
#### sample.html(full html)
    <html>
      <head>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    
        <script type="text/javascript" src="jquery-1.7.2.min.js"></script>
        <script type="text/javascript" src="jquery.codefetch.js"></script>
    
        <!-- if use Syntax Highlighter need follows -->
        <link href='http://alexgorbatchev.com/pub/sh/current/styles/shCore.css' rel='stylesheet' type='text/css'/>
        <link href='http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css' rel='stylesheet' type='text/css'/>
        <script src='http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js' type='text/javascript'></script>
        <script src='http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js' type='text/javascript'></script>
        <script src='http://alexgorbatchev.com/pub/sh/current/scripts/shBrushXml.js' type='text/javascript'></script>
    
      </head>
    
      <body>
    
        <pre id="codefetchcode"></pre>
    
        <script type="text/javascript" charset="utf-8">
          $("#codefetchcode").codefetch("sakitake", "lib", "js/codefetch/jquery.codefetch.js", "javascript");
          SyntaxHighlighter.all();
        </script>
    
      </body>
    
    </html>

Links
--------
1. [Blog](http://sakitake4.blogspot.jp/)
2. [Syntax Highlighter](http://alexgorbatchev.com/SyntaxHighlighter/)
 
License
----------
 Distributed under the [MIT License].
 Copyright (c) 2012 sakitake
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
