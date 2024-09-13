import { LinkGates } from './models/Link'
import { Component, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Biography } from './biography.component';
import { Link } from './link.Component';
import { Quotation } from './quotation.component';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
@Component({
    selector: 'page-tamplate',
    imports: [Biography, Link, Quotation, FormsModule, NgSwitch, NgSwitchCase, NgIf],
    standalone: true,
    templateUrl: `./HtmlTemplateComponent/startTemplate.html`,
    styleUrls: [`./css/start.css`]
})


export class AppComponent {

    @ViewChild(Link)
    private expLink:Link;
    @ViewChild(Quotation)
    private expQuotation:Quotation;


    protected link: string;
    protected nameLink: string;
    protected quotation: string;
    protected view: string;
    protected whithBiography: boolean;
    protected whithLink: boolean;
    protected withQuotation: boolean;

    constructor() {

        this.view = "biography";
        this.whithBiography = true;
        this.whithLink = false;
        this.withQuotation = false;
  
    }

    AddQuotation() {
        this.expQuotation.AddQuotationChild(this.quotation);
        this.quotation = undefined;
    }
    AddLink() {
       this.expLink.AddLinkChild(this.link,this.nameLink);
       this.link=undefined;
       this.nameLink=undefined;

    }

    Biography() {
        this.view = "biography";
        this.whithBiography = true;
        this.whithLink = false;
        this.withQuotation = false;
    };

    Quotation() {

        this.view = "quotations";
        this.whithBiography = false;
        this.whithLink = false;
        this.withQuotation = true;

    };
    Link() {

        this.view = "links";
        this.whithBiography = false;
        this.whithLink = true;
        this.withQuotation = false;

    }


};