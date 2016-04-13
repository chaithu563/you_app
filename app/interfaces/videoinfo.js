System.register([], function(exports_1) {
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
            })();
            exports_1("videoinfo", videoinfo);
        }
    }
});
//# sourceMappingURL=videoinfo.js.map