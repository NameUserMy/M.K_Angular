import { LinkGates } from './models/Link'
import { Component } from '@angular/core';
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

    protected link: string;
    protected nameLink: string;
    protected quotation: string;
    protected view: string;
    protected whithBiography: boolean;
    protected whithLink: boolean;
    protected withQuotation: boolean;

    protected linkModels: Array<LinkGates> = []
    protected quotations: Array<string> = []
    constructor() {
        this.view = "biography";
        this.whithBiography = true;
        this.whithLink = false;
        this.withQuotation = false;
        this.linkModels = [
            new LinkGates("https://en.wikipedia.org/wiki/Bill_Gates", "Bill Gates wiki"),
            new LinkGates("https://www.gatesfoundation.org/", "Gates Foundation"),
            new LinkGates("https://www.gatesnotes.com/", "Gates notes"),
            new LinkGates("https://twitter.com/billgates", "Gates Twitter"),
        ];

        this.quotations = ["“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”",
            "“We all need people who will give us feedback. That’s how we improve.”",
            "“Patience is a key element of success.”",
            "“Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.”"];

    }

    AddQuotation() {

        if (this.quotation === undefined) {

            alert("all fild required");

        } else {
            this.quotations.push(this.quotation);
        }
        this.quotation = undefined;
    }
    AddLink() {
        if (this.link === undefined || this.nameLink === undefined) {

            alert("all fild required");

        } else {
            this.linkModels.push(new LinkGates(this.link, this.nameLink));
        }
        this.link = undefined;
        this.nameLink = undefined;

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