import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Films } from '../models/film.model';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private api:ApiService) {}
  
  films! : Films;
  loading : Boolean = false

  ngOnInit(): void{
    this.api.callApi().then((data)=>{
      this.films = data;
      this.loading = true

    })

  }

}
