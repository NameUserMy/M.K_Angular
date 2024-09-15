import{Card} from "../models/movie"
export class SearchMovie{

    private movie:Card;
    async getMovieFech(title:string):Promise<Card>{

       this.movie= await fetch(`http://www.omdbapi.com/?t=${title}&apikey=be50166f`)
        .then((response) => {
           return response.json();
        }).then((data)=>{
            return new Card(
                data["Title"],
                data["Released"],
                data["Genre"],
                data["Country"],
                data["Director"],
                data["Writer"],
                data["Actors"],
                data["Awards"],
                data["Poster"]
            );

           
        });
        return this.movie;
    }
}

 