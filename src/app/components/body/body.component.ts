import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  comments: any [] = [
    {
      name: 'Juan Manuel',
      lias: '@user',
      comment: 'Angular is best'
    },
    {
      name: 'Juan Alfonso',
      lias: '@user',
      comment: 'Angular is best'
    }
]

  name:any;
  comment: any;

  constructor() { }

  ngOnInit(): void {
  }

  addComent(){

    let addCommentsArray = {
      name:this.name,
      alias: `@ ${this.name}`,
      comment:this.comment
    }
    this.comments.push(addCommentsArray);
   //clear inputs
    this.name = "";
    this.comment = "";
  }

  deleteComment(indice: any){{
    this.comments.splice(indice,1);
  }}
}
