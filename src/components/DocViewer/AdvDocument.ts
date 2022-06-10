
import { DocElement } from './DocElement';
import { DocElementType } from "./DocElementType";

export default class AdvDocument {
    public name: string = 'AdvDocument';

    public title: string = "untitled"

    private children: Array<DocElement> = new Array<DocElement>();

    constructor() {
        console.log(`${this.name} is loaded`);
    }


    addElement(typ: DocElementType, id: string): DocElement {
        let element = new DocElement(typ, id, id, id);
        this.children.push(element);
        return element;
    }
}

export { AdvDocument };
