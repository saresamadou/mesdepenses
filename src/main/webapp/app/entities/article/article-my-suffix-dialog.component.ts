import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { ArticleMySuffix } from './article-my-suffix.model';
import { ArticleMySuffixPopupService } from './article-my-suffix-popup.service';
import { ArticleMySuffixService } from './article-my-suffix.service';
import { CategoryMySuffix, CategoryMySuffixService } from '../category';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-article-my-suffix-dialog',
    templateUrl: './article-my-suffix-dialog.component.html'
})
export class ArticleMySuffixDialogComponent implements OnInit {

    article: ArticleMySuffix;
    isSaving: boolean;

    categories: CategoryMySuffix[];

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private articleService: ArticleMySuffixService,
        private categoryService: CategoryMySuffixService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.categoryService.query()
            .subscribe((res: ResponseWrapper) => { this.categories = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.article.id !== undefined) {
            this.subscribeToSaveResponse(
                this.articleService.update(this.article));
        } else {
            this.subscribeToSaveResponse(
                this.articleService.create(this.article));
        }
    }

    private subscribeToSaveResponse(result: Observable<ArticleMySuffix>) {
        result.subscribe((res: ArticleMySuffix) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: ArticleMySuffix) {
        this.eventManager.broadcast({ name: 'articleListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }

    trackCategoryById(index: number, item: CategoryMySuffix) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-article-my-suffix-popup',
    template: ''
})
export class ArticleMySuffixPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private articlePopupService: ArticleMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.articlePopupService
                    .open(ArticleMySuffixDialogComponent as Component, params['id']);
            } else {
                this.articlePopupService
                    .open(ArticleMySuffixDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
