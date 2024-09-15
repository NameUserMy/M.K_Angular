import { Component, OnInit } from '@angular/core';
import{Card} from "./models/movie"
import{SearchMovie} from "./Services/SearchMovieService"
@Component({
    selector: 'card-component',
    standalone: true,
    templateUrl: `./htmlTemplate/card.html`,
    providers:[SearchMovie],
    
})

export class CardMovie implements OnInit{

    protected movie:Card;
    protected request:string;
    constructor(private _getMovie:SearchMovie){}
    GetMovie(title:string){
        this._getMovie.getMovieFech(title).then((data)=>{
            this.movie=data;
          });

    }

    ngOnInit(): void {
      this._getMovie.getMovieFech("I robot").then((data)=>{
        this.movie=data;
      });
    }

     
   
};