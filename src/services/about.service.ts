import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {
    info = {
    nom : "names geo",
    mail : "namesgeo@gmail.com",
    tel: "0756321012"
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

  addComments(com){
    this.comments.push(com);
  }

  getAllComments(){
      return this.comments;
  }

  getInfo(){
      return this.info;
  }

}
