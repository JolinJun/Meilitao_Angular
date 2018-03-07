/* 
Home 主页 */
import { Component, ViewChild, AfterViewInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { KSSwiperContainer, KSSwiperSlide } from 'angular2-swiper';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { OnInit } from '../../../../node_modules/_@angular_core@4.4.6@@angular/core/src/metadata/lifecycle_hooks';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { searchAnimation, colorState } from '../../animatons/app.animations'; // 搜索板自定义动画


import { HomeList, HomeListItem } from './../../model/index.model';

@Component({
    selector: 'mlt-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [searchAnimation, colorState]

})
export class MeiliTaoHomeComponent implements OnInit {
    @ViewChild('itemRef') itemRef: ElementRef;
    @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;
    private imgArray: Array<number> = new Array<number>();   // 图片数组
    private swiperOptions: any;
    private dataList: HomeList = new HomeList();
    private data
    constructor(private http: HttpClient, private _http: Http, private cdr: ChangeDetectorRef) {
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

    ngOnInit() {
        // this.testObservable();
        this.getData();
    }

    private searchWrapShow: boolean = false;
    openSearchWrap(): void {
        this.searchWrapShow = true;
    }
    closeSearchWrap(): void {
          this.searchWrapShow = false;
        // alert(1)
    }

    private isActive: boolean = false;
    slideDown(event): void {
        this.isActive = !this.isActive;
        console.log(event)
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

    private url = 'http://h5.jumei.com/index/requestDelegate?http://mobile.jumei.com/msapi/mall/allcategories.json';
    private _url = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';

    getData() {
        this.http.get(this._url).subscribe((data) => {
            console.log(data['result']);
            this.data = data['result'];

            // this.dataList = data[result];
            // this.cdr.markForCheck();

            // this.cdr.detectChanges();
            // this.cdr.reattach()
        }, (err) => {
            console.log(err);
        })

        // this.http.get(this._url).subscribe(data => {
        //     console.log(data);
        // })
    }
    testObservable() {

        // let stream = new Observable(observer => {
        //     let count = 0;
        //     let interval = setInterval(() => {
        //         observer.next(count++)
        //     }, 1000);
        //     return () => {
        //         clearInterval(interval);
        //     }
        // });
        // console.log(this.itemRef);
        // let rx = Observable.fromEvent(this.itemRef.nativeElement, 'click')
        //     .subscribe(event => {
        //         console.log(event);
        //     })
        // stream.subscribe(val => {
        //     console.log(val);
        // });

        // stream.filter((val: number) => {
        //     return val % 2 === 0;
        // }).subscribe(val => {
        //     console.log(val);
        // });

        // stream.map((val: number) => {
        //     return val * val;
        // }).subscribe(val => {
        //     console.log(val);
        // });

        // stream.map((val: number) => {
        //     return val * val;
        // }).subscribe(val => {
        //     console.log(val);
        // });



    }


}