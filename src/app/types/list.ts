import { ListType } from './list-type.enum';

export interface List {
    name:string;
    description: string;
    type: ListType;
    dateCreated: string;
}
