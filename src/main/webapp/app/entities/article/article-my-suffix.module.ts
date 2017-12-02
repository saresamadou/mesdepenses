import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MesDepensesSharedModule } from '../../shared';
import {
    ArticleMySuffixService,
    ArticleMySuffixPopupService,
    ArticleMySuffixComponent,
    ArticleMySuffixDetailComponent,
    ArticleMySuffixDialogComponent,
    ArticleMySuffixPopupComponent,
    ArticleMySuffixDeletePopupComponent,
    ArticleMySuffixDeleteDialogComponent,
    articleRoute,
    articlePopupRoute,
    ArticleMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...articleRoute,
    ...articlePopupRoute,
];

@NgModule({
    imports: [
        MesDepensesSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        ArticleMySuffixComponent,
        ArticleMySuffixDetailComponent,
        ArticleMySuffixDialogComponent,
        ArticleMySuffixDeleteDialogComponent,
        ArticleMySuffixPopupComponent,
        ArticleMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        ArticleMySuffixComponent,
        ArticleMySuffixDialogComponent,
        ArticleMySuffixPopupComponent,
        ArticleMySuffixDeleteDialogComponent,
        ArticleMySuffixDeletePopupComponent,
    ],
    providers: [
        ArticleMySuffixService,
        ArticleMySuffixPopupService,
        ArticleMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MesDepensesArticleMySuffixModule {}
