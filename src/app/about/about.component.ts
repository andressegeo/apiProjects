import { Component, OnInit } from '@angular/core';
//import { AboutService } from '.../services/about.service';
import {TestService} from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  infos: {nom: string, mail: string, tel: number} = {nom : "", mail: "", tel:null};
  comments = [];
  commentaire = {
    message : "",
    date : null
  }
  constructor(private testService : TestService) {
    this.infos = this.testService.getInfo();
    this.comments = this.testService.getAllComments();
   }

  ngOnInit() {
    
  }

  onAddCommentaire(com){
    console.log(com);
    this.testService.addComment(com);
    this.commentaire.message = "";
    }
}
