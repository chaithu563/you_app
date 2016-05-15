export class videoinfo {
	Id: string;
    VideoName: string;
    YoutubeID: string;
    LanguageId: number;
    ActorIds: string;
    VideoTypeId: number;
    ImgUrl: string;
    constructor(id: string, name: string, youtubeId: string, languageId: number, actorIds: string, videoTypeId: number, imgUrl: string) {
		this.Id = id;
		this.VideoName = name;
        this.YoutubeID = youtubeId;
        this.LanguageId = languageId;
        this.ActorIds = actorIds;
        this.VideoTypeId = videoTypeId;
        this.ImgUrl = imgUrl;
		}
}