
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { User } from "../Models/User";
import { FormsModule } from '@angular/forms';
import { Request } from "../Services/RequestService"

@Component({
    selector: 'registration',
    imports: [RouterLink, FormsModule],
    standalone: true,
    templateUrl: `registration.html`,
    styleUrl: `registrations.css`,
    providers: [Request]

})

export class Registration {



    protected user: User;
    protected confirmPass: string;

    constructor(private router: Router, private _registrationUser: Request) {
        this.user = new User();
        this.confirmPass = "";

    }

    async Send() {
        await this._registrationUser.RegistrationUser(this.user).then((data) => {


            console.log(data);
            if (data['isRegistration']) {

                this.router.navigate(["loggin"]);
            } else {

                console.log("No registration");
            }
        });

    }
};

