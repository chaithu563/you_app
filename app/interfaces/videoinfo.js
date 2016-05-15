System.register([], function(exports_1) {
    var videoinfo;
    return {
        setters:[],
        execute: function() {
            videoinfo = (function () {
                function videoinfo(id, name, youtubeId, languageId, actorIds, videoTypeId, imgUrl) {
                    this.Id = id;
                    this.VideoName = name;
                    this.YoutubeID = youtubeId;
                    this.LanguageId = languageId;
                    this.ActorIds = actorIds;
                    this.VideoTypeId = videoTypeId;
                    this.ImgUrl = imgUrl;
                }
                return videoinfo;
            })();
            exports_1("videoinfo", videoinfo);
        }
    }
});
//# sourceMappingURL=videoinfo.js.map