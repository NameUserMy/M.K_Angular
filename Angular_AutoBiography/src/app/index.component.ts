
import { Component } from '@angular/core';
import {Biography} from './biography.component';
import {Link} from './link.Component';
import {Quotation} from './quotation.component';
@Component({
    selector: 'page-tamplate', 
    imports:[Biography,Link,Quotation],
    standalone: true, 
    templateUrl:`./HtmlTemplateComponent/startTemplate.html`,
    styleUrls:[`./css/start.css`]
    // Определяется шаблон, который указывает, как требуется визуализировать компонент.
    // В данном случае в шаблоне задана двусторонняя привязка с помощью выражений 
    // [(ngModel)] = "name" и {{ name }} к некоторой модели name.
})


export class AppComponent {
    
}