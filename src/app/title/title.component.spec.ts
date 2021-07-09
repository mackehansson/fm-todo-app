import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';

describe('TitleComponent', () => {
    let component: TitleComponent;
    let fixture: ComponentFixture<TitleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TitleComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render a title', () => {
        const fixture = TestBed.createComponent(TitleComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(
            compiled.querySelector('.page-header__title').textContent
        ).toContain('ToDo');
    });
});
