import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
    selector: 'quotation', 
    standalone: true, 
    imports:[NgFor],
    templateUrl:`./HtmlTemplateComponent/quotationTemplate.html`,
    styleUrl:`./css/quotation.css`,
})


export class Quotation {

    @Input() quotations:Array<string>;
    
}