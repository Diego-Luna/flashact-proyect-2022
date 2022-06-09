import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  createPost: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeCreatePost(): void {
    this.createPost = !this.createPost;
  }
}
