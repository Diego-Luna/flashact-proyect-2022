import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-stage',
  templateUrl: './small-stage.component.html',
  styleUrls: ['./small-stage.component.css']
})
export class SmallStageComponent implements OnInit {

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
