import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 表单模块
import { KSSwiperModule } from 'angular2-swiper'; // swiper滑动插件模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 动画 
import { HttpClientModule } from '@angular/common/http'; // http请求模块
import { HttpModule } from '@angular/http';

import { MltRouterModule } from './app-routing.module'; // 路由模块

import { AppComponent } from './app.component';
import { MeiliTaoCartComponent, MeiliTaoMyComponent, MeiliTaoHomeComponent } from './components';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MeiliTaoCartComponent,
    MeiliTaoMyComponent,
    MeiliTaoHomeComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MltRouterModule,
    KSSwiperModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
