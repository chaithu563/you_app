export class videoinfo {
	videoId: string;
	videoName: string;
	imgUrl: string;
		constructor(id: string, name: string, url: string) {
		this.videoId = id;
		this.videoName = name;
		this.imgUrl = url;
		}
}