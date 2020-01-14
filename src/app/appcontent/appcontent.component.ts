import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 
import { Region } from '../../model/region';


@Component({
  selector: 'app-appcontent',
  templateUrl: './appcontent.component.html',
  styleUrls: ['./appcontent.component.css']
})
export class AppcontentComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  regions : Region[] = []; 


  ngOnInit() {
    console.log(this.getRegion());
    this.getRegion(); 
  }

  getRegion(): void {
    this.apiService.getRegion().subscribe(data => {
       console.log(data); 
       this.regions = data.data;
       this.regions.map(val => <Region>({
         'id' : val.id,
         'name' : val.name,
         'code' : val.code
       }));  
    }); 
  }
}
