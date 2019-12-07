import { Excerpt } from './excerpt';

export class Story {

    public storyId: number;
    public excerpts: Array<Excerpt>;
    public isSelected: boolean;
    public titleOfStory: string;

    constructor() {
        this.excerpts = new Array<Excerpt>();
        this.isSelected = false;
    }
}
