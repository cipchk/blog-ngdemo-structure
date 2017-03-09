import { RoutesModule } from './routes/routes.module';
import { TestBed, async } from '@angular/core/testing';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { APP_BASE_HREF } from "@angular/common";

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                LayoutModule,
                SharedModule,
                RoutesModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    it('创建app组件', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`页面标题应该是 'app works!'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app works!');
    }));

    it('有个[router-outlet]标签', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('router-outlet')).toBeTruthy();
    }));

});
