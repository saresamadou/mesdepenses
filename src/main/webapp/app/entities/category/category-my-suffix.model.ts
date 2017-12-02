import { BaseEntity } from './../../shared';

export class CategoryMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public categories?: BaseEntity[],
    ) {
    }
}
