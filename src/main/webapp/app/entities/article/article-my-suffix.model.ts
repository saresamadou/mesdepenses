import { BaseEntity } from './../../shared';

export class ArticleMySuffix implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public price?: number,
        public categoryId?: number,
    ) {
    }
}
