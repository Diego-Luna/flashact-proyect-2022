import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-stage',
  templateUrl: './big-stage.component.html',
  styleUrls: ['./big-stage.component.css']
})
export class BigStageComponent implements OnInit {

  @Input() imgUrl: string = "";
  @Input() sectionName: string = "";
  @Input() titleName: string = "";

  @Input() colorTitle: string = "";
  @Input() colorSection: string = "";
  @Input() colorbackground: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
