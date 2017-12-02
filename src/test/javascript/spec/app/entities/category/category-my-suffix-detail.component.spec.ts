/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { MesDepensesTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { CategoryMySuffixDetailComponent } from '../../../../../../main/webapp/app/entities/category/category-my-suffix-detail.component';
import { CategoryMySuffixService } from '../../../../../../main/webapp/app/entities/category/category-my-suffix.service';
import { CategoryMySuffix } from '../../../../../../main/webapp/app/entities/category/category-my-suffix.model';

describe('Component Tests', () => {

    describe('CategoryMySuffix Management Detail Component', () => {
        let comp: CategoryMySuffixDetailComponent;
        let fixture: ComponentFixture<CategoryMySuffixDetailComponent>;
        let service: CategoryMySuffixService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [MesDepensesTestModule],
                declarations: [CategoryMySuffixDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    CategoryMySuffixService,
                    JhiEventManager
                ]
            }).overrideTemplate(CategoryMySuffixDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(CategoryMySuffixDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(CategoryMySuffixService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new CategoryMySuffix(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.category).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
