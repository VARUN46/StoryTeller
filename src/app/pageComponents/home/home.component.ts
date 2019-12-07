import { Component, OnInit } from '@angular/core';
import { Stories } from 'src/app/entities/stories';
import { StoriesService } from 'src/app/sharedServices/stories.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Excerpt } from 'src/app/entities/excerpt';
import { SharedDataTag } from 'src/app/entities/sharedDataTag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public storiesData: Stories;
  public addEntryType: SharedDataTag;
  public createExcerpt: Excerpt = new Excerpt();
  public createExcerptForm: FormGroup;
  newExcerptHint: string;


  constructor(
    private storiesSvc: StoriesService
    ) {
      this.createExcerpt.content = '';
      this.createExcerptForm = new FormGroup({
        createExcerptData: new FormControl('', [
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.required,
          ]),
      });
     }

  ngOnInit() {
    this.storiesData = this.storiesSvc.storiesData;
    this.addEntryType = this.storiesSvc.CreateEntryType;
    this.newExcerptHint = 'Write Something To Create Some New Story';
  }


  addExcerpt() {
    const excerpt = new Excerpt();
    excerpt.content = this.createExcerptForm.get('createExcerptData').value;
    excerpt.storyId = this.storiesSvc.GetSelectedStory();
    this.storiesSvc.AddExcerpt(excerpt);

  }

  deleteExcerpt() {
    this.storiesSvc.DeleteExcerpt();
  }

  deleteStory() {
    this.storiesSvc.DeleteStory();
  }

  get createExcerptData() {
    return this.createExcerptForm.get('createExcerptData');
  }

}
