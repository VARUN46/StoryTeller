export class SharedDataTag {
    public key: string;
    public changeTag: string;
    public value: any;

    constructor() {
        this.onChange();
    }

    onChange() {
        this.changeTag = Date.now().toLocaleString();
    }
}
