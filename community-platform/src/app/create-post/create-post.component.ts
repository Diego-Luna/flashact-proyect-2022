import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Output() cancel = new EventEmitter();

  name: string = "";
  institutionORcommunity: string = "";
  experience: string = "";
  image_URLs: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
