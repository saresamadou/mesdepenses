import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager } from 'ng-jhipster';

import { ArticleMySuffix } from './article-my-suffix.model';
import { ArticleMySuffixService } from './article-my-suffix.service';

@Component({
    selector: 'jhi-article-my-suffix-detail',
    templateUrl: './article-my-suffix-detail.component.html'
})
export class ArticleMySuffixDetailComponent implements OnInit, OnDestroy {

    article: ArticleMySuffix;
    private subscription: Subscription;
    private eventSubscriber: Subscription;

    constructor(
        private eventManager: JhiEventManager,
        private articleService: ArticleMySuffixService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe((params) => {
            this.load(params['id']);
        });
        this.registerChangeInArticles();
    }

    load(id) {
        this.articleService.find(id).subscribe((article) => {
            this.article = article;
        });
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.eventManager.destroy(this.eventSubscriber);
    }

    registerChangeInArticles() {
        this.eventSubscriber = this.eventManager.subscribe(
            'articleListModification',
            (response) => this.load(this.article.id)
        );
    }
}
