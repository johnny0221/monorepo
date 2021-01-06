import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { TimeLineNode } from '@personal/shared/types'

@Component({
  selector: 'personal-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('timeline') timeLine: ElementRef;

  @Input() timeLineNodeLists: TimeLineNode[];

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // change the css variable --height based on the Input()
    // let lengthByNumberOfNodes = this.timeLineNodeLists.length * 300;
    this.rd2.setStyle(this.timeLine.nativeElement, 'cssText', `--height:${800}px`);


  }

}
