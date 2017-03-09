/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ViewComponent } from './view.component';
import { SharedModule } from "../../../shared/shared.module";

describe('Component: View', () => {

    let comp: ViewComponent;
    let fixture: ComponentFixture<ViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewComponent],
            imports: [SharedModule],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(ViewComponent);
                comp = fixture.componentInstance;
            });
    }))

    it('初始化组件', () => {
        expect(comp).toBeTruthy();
    });

    it('检查：表单值变更后是否有更新', () => {
        comp.form.controls['name'].setValue('admin');
        comp.form.controls['pwd'].setValue('admin');
        expect(comp.form.value).toEqual({ name: 'admin', pwd: 'admin' });
    });

    it('检查：用户名为[admin]时，表单应该是有效', (done) => {
        comp.form.controls['name'].setValue('admin');
        comp.form.controls['pwd'].setValue('admin');
        setTimeout(() => {
            expect(comp.form.controls['name'].valid).toEqual(true);
            done();
        }, 1000);
    });

    it('检查：用户名为[admin1]时，表单应该是无效', (done) => {
        comp.form.controls['name'].setValue('admin1');
        comp.form.controls['pwd'].setValue('admin');
        setTimeout(() => {
            expect(comp.form.controls['name'].invalid).toEqual(true);
            done();
        }, 1000);
    });
});
