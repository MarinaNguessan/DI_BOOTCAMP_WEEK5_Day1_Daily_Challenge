import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { resolve } from "dns";
import { Films } from "../models/film.model";

@Injectable ()
export class ApiService{
 

   constructor(private client : HttpClient) {

   }

   endPoint = `https://swapi.dev/api/films/1/`

   callApi(): Promise<Films>{ 
    return new Promise((resolve, reject )=>{
        this.client.get(this.endPoint).subscribe((data : any)=>{
        let result : Films = {title : data.title,  episode_id : data.episode_id, opning_crawl : data.opning_crawl, director : data.director, producer : data.producer, release_date : data.release_date 

        }

        resolve(result)

        })
    })
   }
}