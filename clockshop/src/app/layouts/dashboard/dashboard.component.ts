import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DataSlider = [
    { title: "H-Vault Classico", description: 'H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is.', price: '1.499.00'},
    { title: "H-Vault Classico", description: 'H-Vault Watches Are A Lot Like Classic American Muscle Cars - Expect For The American Part That Is.', price: '1.499.00'}
  ]
  constructor() { }

  ngOnInit() {
        var heroSlider = $('.hero-slider-one');
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
        var product_4 = $('.product-active-lg-4');
        product_4.slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"> </i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"> </i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        var product_row_4 = $('.product-active-row-4');
        product_row_4.slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            rows: 2,
            autoplay: false,
            prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"> </i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"> </i></button>',
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

  }

}
