
export class Card{

    accessor Title:string;
    accessor Released:string;
    accessor Genre:string;
    accessor Country:string;
    accessor Director:string;
    accessor Writer:string;
    accessor Actors:string;
    accessor Awards:string;
    accessor Poster:string;

    constructor(title:string,released:string,genre:string,
        country:string,director:string,writer:string,actors:string,awards:string,poster:string){

            this.Title=title;
            this.Released=released;
            this.Genre=genre;
            this.Country=country;
            this.Director=director;
            this.Writer=writer;
            this.Actors=actors;
            this.Awards=awards;
            this.Poster=poster;

    }

}


