import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/entities/story';
import { StoriesService } from 'src/app/sharedServices/stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  @Input() story: Story;

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
  }

  selectStory() {
    this.storyService.ToggleSelectEntry(this.story.storyId, -1);
  }

}
