
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Request } from "../Services/RequestService"
import { User } from '../Models/User';

@Component({
    selector: 'account',
    standalone: true,
    imports: [RouterLink, FormsModule],
    templateUrl: `account.html`,
    styleUrl: 'account.css',
    providers: [Request]

})

export class Account implements OnInit {


    protected greetings: string;
    protected user: User;
    protected inputStatus: boolean;



    constructor(private _ar: ActivatedRoute, private _account: Request) {
        _ar.params.subscribe(params => this.greetings = params['loggin']);
        this.user = new User();
        this.inputStatus = true;
    }
    Settings() {
        this.inputStatus = false;
    }

    protected StateButton(loggin: NgModel, pass: NgModel, name: NgModel, lastName: NgModel): boolean {
        return loggin.untouched && pass.untouched && name.untouched && lastName.untouched
    }

    ngOnInit(): void {

        this._account.GetUser(this.greetings).then((data) => {
            this.user.Login = data['login'];
            this.user.Pass = data['pass'];
            this.user.Name = data['name'];
            this.user.LastName = data['lastName'];
        });
    }
    protected send() {

        this._account.UpdateUser(this.user, this.greetings).then((data) => {
            if (data['isUpdate']) {

                this._account.GetUser(this.greetings).then((data) => {
                    this.user.Login = data['login'];
                    this.user.Pass = data['pass'];
                    this.user.Name = data['name'];
                    this.user.LastName = data['lastName'];
                });
                this.inputStatus = true;
            }
        });


    }

};