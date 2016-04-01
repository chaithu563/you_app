export class videoinfo {
	videoId: number;
	videoName: string;
	imgUrl: string;
		constructor(id: number, name: string, url: string) {
		this.videoId = id;
		this.videoName = name;
		this.imgUrl = url;
		}
}