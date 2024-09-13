import {Input,Component} from '@angular/core';
import {LinkGates} from './models/Link'
import { NgFor } from '@angular/common';




@Component({
    selector: 'links', 
    standalone: true,
    imports:[NgFor], 
    templateUrl:`./HtmlTemplateComponent/linkTemplate.html`,
    styleUrls:[`./css/link.css`],
    
})


export class Link{
    protected linkModels: Array<LinkGates> = []
    constructor(){
        this.linkModels = [
            new LinkGates("https://en.wikipedia.org/wiki/Bill_Gates", "Bill Gates wiki"),
            new LinkGates("https://www.gatesfoundation.org/", "Gates Foundation"),
            new LinkGates("https://www.gatesnotes.com/", "Gates notes"),
            new LinkGates("https://twitter.com/billgates", "Gates Twitter"),
        ];
    }
    public AddLinkChild(link:string,nameLink:string){
       if (link === undefined || nameLink === undefined) {

            alert("all fild required");

        } else {
            this.linkModels.push(new LinkGates(link,nameLink));
        }
    }
     
   

}