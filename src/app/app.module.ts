import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';

@NgModule({
  // 声明组件和指令
  declarations: [
    AppComponent
  ],
  // 导入其他模块，这样本模块可以使用暴露出来的组件、指令、管道等
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    SharedModule.forRoot(),
    RoutesModule,
    CoreModule
  ],
  // 服务依赖注入
  providers: [],
  // 暴露本模块的组件、指令、管道等
  exports: [],
  entryComponents: [],
  // APP启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
