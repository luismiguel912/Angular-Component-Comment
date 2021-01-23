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
    console.log(this.name);
    console.log(this.comment);

    let addCommentsArray = {
      name:this.name,
      alias: `@ ${this.name}`,
      comment:this.comment
    }

    this.comments.push(addCommentsArray);
  }

  deleteComment(indice: any){{
    console.log(indice);
    this.comments.splice(indice,1);
  }}
}
