
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Request } from "../Services/RequestService"
import { Login } from '../Models/Login'
@Component({
    selector: 'loggin',

    standalone: true,
    imports: [RouterLink, FormsModule],
    templateUrl: `loggin.html`,
    styleUrl: 'loggin.css',
    providers: [Request]

})

export class Loggin {

    protected loggin: Login
    constructor(private router: Router, private _loggin: Request) {
        this.loggin = new Login();

    };



    async Send() {


        

        await this._loggin.Loggin(this.loggin).then((data => {
            if (data['isLoggin']) {


                this.router.navigate([`account/${this.loggin.Login}`]);
            }
            else {

                this.loggin.Login = "";
                this.loggin.Pass = "";
                console.log("No loggin");

            }
        }))
    }


};