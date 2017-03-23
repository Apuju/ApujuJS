;(function(window,undefined){
    "use strict";
    //防止重覆載入script
    if(window.apuju) 
        return;
    //Define apuju
    window.apuju = new Object();
    //Define apuju.global
    var _global = {
        loadScript: function(strScriptURI){
            var js = document.createElement("script");
            js.type = "text/javascript";
            js.src = strScriptURI;
            document.write(js.outerHTML);
        },
        extend: function(oTarget,registor){}
    };
    //registor apuju to window
    if(typeof window === "object" && typeof window.document === "object" ){
        window.apuju = window.apuju.global = _global;
    }
})(window);