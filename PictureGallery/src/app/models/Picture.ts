export class Picture{

    accessor Id:number
    accessor Author:string;
    accessor Title:string;
    accessor Year:number;
    accessor Description:string;
    accessor Url:string;
    private increment:number;

    constructor(author:string,title:string, year:number,description:string,url:string,id:number){
        this.Author=author;
        this.Title=title;
        this.Year=year;
        this.Description=description;
        this.Url=url;
        this.Id=id;

    }
}