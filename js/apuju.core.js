/*
*   Use jQuery 2.0.3
*   apuju Version 1.0.0
*/
;(function(jQuery,apuju,undefined){
    "use strict";
    //防止重覆載入script
    if(apuju.core)
        return;
    //Define apuju.core
    apuju.core = new Object();
    var _core = {
        hello: function(){
            alert("HELLO!!");
        }
    };
    //Registor apuju.core
    if(typeof apuju === "object"){
        jQuery.extend(apuju.core, _core);
    }
})(jQuery,apuju);