System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var videoinfo;
    return {
        setters:[],
        execute: function() {
            videoinfo = (function () {
                function videoinfo(id, name, url) {
                    this.videoId = id;
                    this.videoName = name;
                    this.imgUrl = url;
                }
                return videoinfo;
            }());
            exports_1("videoinfo", videoinfo);
        }
    }
});
//# sourceMappingURL=videoinfo.js.map