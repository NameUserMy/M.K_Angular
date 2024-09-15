import { Component,ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardMovie } from "./card"

@Component({
    selector: 'finder-index',
    standalone: true,
    imports: [CardMovie,FormsModule],
    templateUrl: `./htmlTemplate/index.html`,

})

export class AppComponent {

   protected request:string;
   @ViewChild(CardMovie)
   private searchMovie:CardMovie

   protected Search(){

    this.searchMovie.GetMovie(this.request);

   }


};