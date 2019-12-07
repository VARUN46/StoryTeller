import { Injectable } from '@angular/core';
import { Excerpt } from '../entities/excerpt';
import { Stories } from '../entities/stories';
import { Story } from '../entities/story';
import { SharedDataTag } from '../entities/sharedDataTag';
import { PersistanceStorageService } from './persistance-storage.service';
import { StorageData } from '../entities/storageData';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  storiesData: Stories;
  CreateEntryType: SharedDataTag;

  constructor(private storageSvc: PersistanceStorageService) {
    this.PopulateSessionData();
  }

  public PopulateSessionData() {
    const storageData = this.storageSvc.getDataFromStorage();
    this.CreateEntryType = new SharedDataTag();
    this.storiesData = storageData.stories;
    this.CreateEntryType.value = storageData.buttonStateString;
  }

  public AddExcerpt(excerpt: Excerpt): number {
    let storyId = -1;

    if (typeof(excerpt.storyId) === 'undefined' || excerpt.storyId <= 0) {
      const story: Story = new Story();
      story.storyId = this.storiesData.stories.length + 1;
      excerpt.storySequence = story.excerpts.length + 1;
      excerpt.storyId = story.storyId;
      story.excerpts.push(excerpt);
      story.titleOfStory = excerpt.content;
      this.storiesData.stories.push(story);
      storyId = story.storyId;
    } else {
      const storyEntry = this.storiesData.stories.filter(story => story.storyId === excerpt.storyId)[0];
      if (typeof(storyEntry) !== 'undefined') {
        excerpt.storySequence = storyEntry.excerpts.length + 1;
        storyEntry.excerpts.push(excerpt);
        storyId = storyEntry.storyId;
        excerpt.storyId = storyEntry.storyId;
      }
    }
    this.SyncStorage();
    return storyId;
  }

  public SyncStorage() {
    const storageData: StorageData = new StorageData();
    storageData.stories = this.GetStoriesData();
    storageData.buttonStateString = this.CreateEntryType.value;
    this.storageSvc.replaceInStorage(storageData);
  }

  public GetStoriesData(): Stories {
    return this.storiesData;
  }

  public ToggleSelectEntry(storyId: number , excerptId: number) {
    if (typeof(storyId) !== 'undefined' && storyId > 0) {
    const selectedStoryEntry = this.storiesData.stories.filter(
      story => story.storyId === storyId)[0];

    if (typeof(excerptId) !== 'undefined' && excerptId > 0) {
      const excerptEntry = selectedStoryEntry.excerpts.filter(
          excerpt => excerpt.storySequence === excerptId)[0];
      excerptEntry.isSelected = !excerptEntry.isSelected;
    } else {

      selectedStoryEntry.isSelected = !selectedStoryEntry.isSelected;

    }

    if (storyId > 0 && selectedStoryEntry.isSelected) {
      this.CreateEntryType.value = 'Excerpt';
    } else {
      this.CreateEntryType.value = 'Story';
    }

  }

    this.SyncStorage();
  }

  public GetSelectedExcerpt() {
    let entrySelected: Excerpt;

    this.storiesData.stories.forEach( entryStory => {
      entryStory.excerpts.forEach(entryExcerpt => {
        if (entryExcerpt.isSelected) {
          entrySelected = entryExcerpt;
        }
      });
    });

    return entrySelected;
  }

  public GetSelectedStory() {
    let selectedStoryEntry = -1;

    const selectedStory = this.storiesData.stories.filter(story => story.isSelected);

    if (selectedStory.length > 0) {
      selectedStoryEntry = selectedStory[0].storyId;
    }

    return selectedStoryEntry;
  }

  public DeleteExcerpt() {
    const excerpt =  this.GetSelectedExcerpt();
    const storyEntry = this.storiesData.stories.filter(story => story.storyId === excerpt.storyId)[0];
    storyEntry.excerpts = storyEntry.excerpts.filter(excerptD => excerptD.storySequence !== excerpt.storySequence);
    this.SyncStorage();
  }

  public DeleteStory() {
    const storyId = this.GetSelectedStory();
    this.storiesData.stories = this.storiesData.stories.filter(story => story.storyId !== storyId);
    this.CreateEntryType.value = 'Story';
    this.SyncStorage();
  }

}
