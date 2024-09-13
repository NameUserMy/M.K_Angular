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
     
    @Input() linkModels:Array<LinkGates>;

}