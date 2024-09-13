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
    protected quotations: Array<string> = []

    constructor(){
        this.quotations = ["“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”",
            "“We all need people who will give us feedback. That’s how we improve.”",
            "“Patience is a key element of success.”",
            "“Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself.”"];
    }
    public AddQuotationChild(quotation:string){
        if (quotation === undefined) {

            alert("all fild required");

        } else {
            this.quotations.push(quotation);
        }
        
    }

    
    
}