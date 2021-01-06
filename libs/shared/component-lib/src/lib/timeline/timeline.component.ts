import { Component, Input, OnInit } from '@angular/core';
import { TimeLineNode } from '@personal/shared/types'

@Component({
  selector: 'personal-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @Input() timeLineNodeLists: TimeLineNode[];

  constructor() { }

  ngOnInit(): void {
  }

}
