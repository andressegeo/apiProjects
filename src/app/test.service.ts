import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
 infos = {
    nom : "names geo",
    mail : "namesgeo@gmail.com",
    tel: 756321055
  }

  comments = [
    {
      date : new Date(),
      message : "great comments"
    },
    {
      date : new Date(),
      message : "how about you today?"
    },
    {
      date : new Date(),
      message : "pfff, no worry about gain"

    }
  ];
  constructor() { }

  addComment(com){
    com.date = new Date();
    this.comments.push(com);
  }

  getAllComments(){
      return this.comments;
  }

  getInfo(){
      return this.infos;
  }

}
