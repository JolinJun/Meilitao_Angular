/* 
Home 主页 */
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';

@Component({
    selector: 'mlt-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class MeiliTaoHomeComponent {
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
    private imgArray: Array<number> = new Array<number>();   // 图片数组
    private swiperOptions: any;
    constructor() {
        this.swiperOptions = {
            slidesPerView: 1,   // 每页显示几张图片
            loop: true,  //是否循环
            // spaceBetween: 1000,  // 图片滚动时之间的距离
            autoplay: true,    // 自动播放
            pagination: '.swiper-pagination',   //设置page
            speed: 2000,    // slider活动速度
            paginationType: 'bullets',  // page类型
            paginationClickable: true   // page是否可被点击
        };
        this.imgArray = [1, 2];
    }

    // // 下一个
    // moveNext() {
    //     this.swiperContainer.swiper.slideNext();
    //     console.log(this.swiperContainer)
    // }
    // // 上一个
    // movePrev() {
    //     this.swiperContainer.swiper.slidePrev();
    // }
}