import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({

    selector: '[About]',
    standalone: true,
    host: {

        '(mouseenter)': 'OnEnter()',
        '(mouseleave)': 'OnLeave()'

    }


})

export class AboutPictureDerective {


    @Input() backGround:string


    constructor(private element: ElementRef, private render: Renderer2) {

        this.render.setStyle(this.element.nativeElement,"background-image",`urt(${this.backGround})`)
    }
    OnEnter() {

       
        this.render.setStyle(this.element.nativeElement,"transform","rotateY(360deg)");
        this.render.setStyle(this.element.nativeElement,"background-image","none")
        this.element.nativeElement.querySelector('#details').style.opacity="1";
    }


    OnLeave() {
   this.render.setStyle(this.element.nativeElement,"transform","rotateY(0deg)");
        this.render.setStyle(this.element.nativeElement,"background-image",`url(${this.backGround})`)
        this.element.nativeElement.querySelector('#details').style.opacity="0";
        console.log(`blah ${this.backGround}` );
    }

   

} 