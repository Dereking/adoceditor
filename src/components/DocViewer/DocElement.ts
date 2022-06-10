
import { v4 as uuid } from "uuid";
import DocElementType from "./DocElementType";

class DocElement {
    public type: DocElementType = DocElementType.ET_UNKNOWN;
    public id: string = "";
    public title: string = "";
    public content: string = "";
    public children: DocElement[] = [];

    constructor(type: DocElementType, id: string, title: string, content: string) {
        this.type = type;
        this.id = id ? id : uuid();
        this.title = title;
        this.content = content;
        this.children = new Array<DocElement>();
    }
    addElement(typ: DocElementType, id: string): DocElement {
        let element = new DocElement(typ, id, id, id);
        this.children.push(element);
        return element;
    }
}


export { DocElement };
