import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MesDepensesCategoryMySuffixModule } from './category/category-my-suffix.module';
import { MesDepensesArticleMySuffixModule } from './article/article-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MesDepensesCategoryMySuffixModule,
        MesDepensesArticleMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MesDepensesEntityModule {}
