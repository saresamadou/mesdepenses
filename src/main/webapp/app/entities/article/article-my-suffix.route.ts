import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ArticleMySuffixComponent } from './article-my-suffix.component';
import { ArticleMySuffixDetailComponent } from './article-my-suffix-detail.component';
import { ArticleMySuffixPopupComponent } from './article-my-suffix-dialog.component';
import { ArticleMySuffixDeletePopupComponent } from './article-my-suffix-delete-dialog.component';

@Injectable()
export class ArticleMySuffixResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const articleRoute: Routes = [
    {
        path: 'article-my-suffix',
        component: ArticleMySuffixComponent,
        resolve: {
            'pagingParams': ArticleMySuffixResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mesDepensesApp.article.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'article-my-suffix/:id',
        component: ArticleMySuffixDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mesDepensesApp.article.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const articlePopupRoute: Routes = [
    {
        path: 'article-my-suffix-new',
        component: ArticleMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mesDepensesApp.article.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'article-my-suffix/:id/edit',
        component: ArticleMySuffixPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mesDepensesApp.article.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'article-my-suffix/:id/delete',
        component: ArticleMySuffixDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'mesDepensesApp.article.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
