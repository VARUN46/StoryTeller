import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

  public rules: string[];
  public isVisible = false;

  constructor() {
    this.rules = [];
   }

  toggleRulesBook() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit() {
    this.setRules();
  }

  setRules() {
    this.rules.push('Characters Limit is 50 for each excerpt.');
    this.rules.push('Minimum Length Required is 10 for each excerpt.');
    this.rules.push('Button To Add Excerpt / Story Will appear once all the validations are passed.');
    this.rules.push('Avoid using Bad Grammer.');
    this.rules.push('Deleting story will delete all the excerpt of that story.');
    this.rules.push('There are no restrictions in deleting story or excerpt. Once Deleted they are removed permanently.');
    this.rules.push('This Data is Only available on your local machine.');

  }

}
