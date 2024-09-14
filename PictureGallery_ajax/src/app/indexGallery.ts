
import { Component, OnInit } from '@angular/core';
//import {UrlService} from './Services/GetUrlPictursService'
import { HttpQueryService } from './Services/AjaxService'
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Picture } from './models/Picture';
import { AboutPictureDerective } from './Directive/AboutDirective'

@Component({
    selector: 'gallery-index',
    imports: [NgFor, AboutPictureDerective, HttpClientModule],
    standalone: true,
    templateUrl: `./htmlTemplate/index.html`,
    providers: [HttpQueryService]

})

export class AppComponent implements OnInit {

    protected urlPicture: Array<Picture> = [];
    protected choicePreview: string;
    protected id: number;
    constructor(private _getPicture: HttpQueryService) {


    }
    Chice(about: string, id: number) {

        this.id = id
        this.choicePreview = about;


    }
    ngOnInit(): void {


        this._getPicture.GetPictureAngular().subscribe({
            next: (data: Picture[]) => {
                this.urlPicture = data;
                this.choicePreview = this.urlPicture[0].Url;
                this.id = 0;
            }
        })

    }
};