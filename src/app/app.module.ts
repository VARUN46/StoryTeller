import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExcerptComponent } from './components/excerpt/excerpt.component';
import { StoryComponent } from './components/story/story.component';
import { StoriesComponent } from './components/stories/stories.component';
import { HomeComponent } from './pageComponents/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoryTitleFormatterPipe } from './pipes/story-title-formatter.pipe';
import { RulesComponent } from './components/rules/rules.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcerptComponent,
    StoryComponent,
    StoriesComponent,
    HomeComponent,
    StoryTitleFormatterPipe,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
