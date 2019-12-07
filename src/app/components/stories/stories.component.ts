import { Component, OnInit, Input } from '@angular/core';
import { Stories } from '../../entities/stories';
import { StoriesService } from 'src/app/sharedServices/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  @Input() stories: Stories;

  constructor(
  ) { }


  ngOnInit() {
  }

}
