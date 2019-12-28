import { Component, OnInit, AfterViewInit, ChangeDetectorRef  } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';
declare var $: any;
@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{
  bestProducts: Array<object>;

  DataSlider = [
    { title: 'H-Vault Classico', description: 'H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is.', price: '1.499.00', image:'assets/images/slider/slide-bg-1.jpg'},
    { title: 'H-Vault Classico', description: 'H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is.', price: '1.499.00', image:'assets/images/slider/slide-bg-2.jpg'}
  ]
  constructor(private api: ApiService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
        this.detectDivChange();
  }

  detectDivChange(){
    const div = document.querySelector('.product-active-lg-4');
    const divFeature = document.querySelector('.product-active-row-4');
    const divBanner = document.querySelector('.hero-slider-one');
    const config = {attributes: true, childList: true, subtree: true};
    const observer = new MutationObserver((mutation)=>{
      this.bestProductsSection();
      this.featuredProductsSection();
      this.BannerSection();
      observer.disconnect();
    });
    observer.observe(div, config);
    observer.observe(divFeature, config);
    observer.observe(divBanner, config);
  }
  ngAfterViewInit(){
    this.api.show().subscribe(
      (res)=>{
        this.bestProducts = res;
        this.cdr.detectChanges();
      });
  }
  bestProductsSection(){
    if($('.product-active-lg-4').length){
      $('.product-active-lg-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"> </i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"> </i></button>',
      });
    }
  }
  featuredProductsSection(){
    if($('.product-active-row-4').length){
      $('.product-active-row-4').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"> </i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"> </i></button>',
      });
    }
  }
  BannerSection(){
    if($('.hero-slider-one').length){
      $('.hero-slider-one').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"> </i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"> </i></button>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: false,
            }
          }
      ]
      });
    }
  }


}
