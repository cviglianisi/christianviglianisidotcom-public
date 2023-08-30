import {FieldsModel} from "src/app/models/fields.model";
import {SysModel} from "src/app/models/sys.model";

export interface ArticleModel {
    fields: FieldsModel,
    sys: SysModel
}