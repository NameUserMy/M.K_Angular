
import { Component, OnInit} from '@angular/core';
import {UrlService} from './Services/GetUrlPictursService'
import { NgFor } from '@angular/common';
import { Picture } from './models/Picture';
import {AboutPictureDerective} from './Directive/AboutDirective'

@Component({
    selector: 'gallery-index',
    imports:[NgFor,AboutPictureDerective],
    standalone: true,
    templateUrl: `./htmlTemplate/index.html`,
    providers:[UrlService]
    
})

export class AppComponent implements OnInit {

    protected urlPicture:Array<Picture>=[];
    protected choicePreview:string;
    protected id:number;
    constructor(private _url:UrlService){
  }
    Test(about:string,id:number){
          this.id=id
          this.choicePreview=about;
    }
    ngOnInit(): void {
        this.urlPicture=this._url.GetUrl();
        this.choicePreview=this.urlPicture[0].Url;
        this.id=0;
    }
};