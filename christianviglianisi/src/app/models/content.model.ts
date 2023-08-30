import {SubcontentModel} from "src/app/models/subcontent.model";

export interface ContentModel {
    nodeType: string,
    content: SubcontentModel[]
}