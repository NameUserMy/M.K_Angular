import { ApplicationConfig } from "@angular/core";
import { provideRouter,Routes } from "@angular/router";

import{Menu} from "./Menu/Menu";
import{NotFound} from "./NotFound";
import {Loggin} from "./Loggin/Loggin";
import {Registration} from "./Registrations/Registrations";
import {Account} from "./Account/Account";

const pages:Routes=[

{path:"",component:Menu},
{path:"loggin",component:Loggin},
{path:"registration",component:Registration},
{path:"account/:loggin",component:Account},
{path:"**",component:NotFound},

];

export const pagesRout:ApplicationConfig={

    providers:[provideRouter(pages)]
};