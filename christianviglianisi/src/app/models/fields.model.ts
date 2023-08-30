import {ContentModel} from "src/app/models/content.model";

export interface FieldsModel {
    title: string,
    summary: string,
    tags: string[],
    urlHandler: string,
    content: ContentModel
}