System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var shopitem;
    return {
        setters:[],
        execute: function() {
            shopitem = (function () {
                function shopitem(id, ptop, pleft, starttime, endtime, producthandle, videoid) {
                    this.Id = id;
                    this.PTop = ptop;
                    this.PLeft = pleft;
                    this.StartTime = starttime;
                    this.EndTime = endtime;
                    this.ProductHandle = producthandle;
                    this.Video_Id = videoid;
                }
                return shopitem;
            }());
            exports_1("shopitem", shopitem);
        }
    }
});
//# sourceMappingURL=shopitem.js.map