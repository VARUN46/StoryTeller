export class Excerpt {
    public storyId: number;
    public storySequence: number;
    public content: string;
    public isSelected: boolean;

    constructor() {
        this.isSelected = false;
        this.storyId = -1;
    }
}
