import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PersonalWebsiteUiTimelineModule } from '@personal/personal-website/ui-timeline';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    PersonalWebsiteUiTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
