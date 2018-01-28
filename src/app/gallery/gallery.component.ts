import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";
import { map } from "rxjs/operator/map";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos: any;
  constructor(private http: Http) { }

  ngOnInit() {
  }

      onSearch(dataForm){
        console.log(dataForm);
        this.http.get("https://pixabay.com/api/?key=7850047-b03d5459af795e9b0f7c7f8d3&q="+dataForm.motcle+"&per_page=10&page=1").map(resp=>resp.json())
        .subscribe(data=>{
          console.log(data);
          this.pagePhotos = data; 
        })
  }
}
