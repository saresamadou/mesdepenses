/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { MesDepensesTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ArticleMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/article/article-my-suffix-detail.component';
import { ArticleMySuffixService } from '../../../../../../main/webapp/app/entities/article/article-my-suffix.service';
import { ArticleMySuffix } from '../../../../../../main/webapp/app/entities/article/article-my-suffix.model';

describe('Component Tests', () => {

    describe('ArticleMySuffix Management Detail Component', () => {
        let comp: ArticleMySuffixDetailComponent;
        let fixture: ComponentFixture<ArticleMySuffixDetailComponent>;
        let service: ArticleMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MesDepensesTestModule],
                declarations: [ArticleMySuffixDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ArticleMySuffixService,
                    JhiEventManager
                ]
            }).overrideTemplate(ArticleMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ArticleMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ArticleMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new ArticleMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.article).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
