import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { map,Observable } from "rxjs";
import { Picture } from "../models/Picture";


@Injectable()
export class HttpQueryService {

    constructor(private http: HttpClient) { }


    GetPictureAngular(): Observable<Picture[]> {

        return this.http.get("assets/picture.json").pipe(map((data: any) => {

            let responsePicture = data["picturesInfo"];
            return responsePicture.map((responsePicture: any, index): Picture => {
                return new Picture(
                    responsePicture.autor,
                    responsePicture.titlePicture,
                    responsePicture.yearPublish,
                    responsePicture.descriptionPicture,
                    data["link"][index], responsePicture.id
                );


            })
        }))
    }




}