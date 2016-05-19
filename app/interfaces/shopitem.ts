export class shopitem {
	Id: number;
    PTop: number;
    PLeft: number;
    StartTime: number;
    EndTime: number;
    ProductHandle: string;
    Video_Id: number;
    constructor(id: number, ptop: number, pleft: number, starttime: number, endtime: number, producthandle: string,videoid: number) {
		this.Id = id;
		this.PTop = ptop;
        this.PLeft = pleft;
        this.StartTime = starttime;
        this.EndTime = endtime;
        this.ProductHandle = producthandle;
        this.Video_Id = videoid;
		}
}