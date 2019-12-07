import { Stories } from './stories';

export class StorageData {
    stories: Stories;
    buttonStateString: string;

    /**
     *
     */
    constructor() {
        this.stories = new Stories();
    }
}
