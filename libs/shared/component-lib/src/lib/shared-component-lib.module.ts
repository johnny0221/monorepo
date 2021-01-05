import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TimelineComponent, ProjectCardComponent],
  exports: [TimelineComponent, ProjectCardComponent],
})
export class SharedComponentLibModule {}
