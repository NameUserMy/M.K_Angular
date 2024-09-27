import { bootstrapApplication } from "@angular/platform-browser";
import { Index } from "./app/index";
import {pagesRout}from "./app/Routing";
bootstrapApplication(Index,pagesRout).catch(e => console.error(e));