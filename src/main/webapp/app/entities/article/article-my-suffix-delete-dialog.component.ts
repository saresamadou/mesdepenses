import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { ArticleMySuffix } from './article-my-suffix.model';
import { ArticleMySuffixPopupService } from './article-my-suffix-popup.service';
import { ArticleMySuffixService } from './article-my-suffix.service';

@Component({
    selector: 'jhi-article-my-suffix-delete-dialog',
    templateUrl: './article-my-suffix-delete-dialog.component.html'
})
export class ArticleMySuffixDeleteDialogComponent {

    article: ArticleMySuffix;

    constructor(
        private articleService: ArticleMySuffixService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.articleService.delete(id).subscribe((response) => {
            this.eventManager.broadcast({
                name: 'articleListModification',
                content: 'Deleted an article'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'jhi-article-my-suffix-delete-popup',
    template: ''
})
export class ArticleMySuffixDeletePopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private articlePopupService: ArticleMySuffixPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            this.articlePopupService
                .open(ArticleMySuffixDeleteDialogComponent as Component, params['id']);
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
