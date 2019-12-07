import { Component, OnInit, Input } from '@angular/core';
import { Excerpt } from 'src/app/entities/excerpt';
import { StoriesService } from 'src/app/sharedServices/stories.service';

@Component({
  selector: 'app-excerpt',
  templateUrl: './excerpt.component.html',
  styleUrls: ['./excerpt.component.css']
})
export class ExcerptComponent implements OnInit {


  @Input() excerpt: Excerpt;

  constructor(private storyService: StoriesService) { }

  ngOnInit() {
  }

  selectExcerpt() {
    this.storyService.ToggleSelectEntry(this.excerpt.storyId, this.excerpt.storySequence);
  }

}
