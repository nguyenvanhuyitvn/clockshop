import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // prodct details slider active
    $('.product-large-slider').slick({
      fade: true,
      arrows: false,
      asNavFor: '.product-nav'
    });
    // product details slider nav active
    $('.product-nav').slick({
      slidesToShow: 4,
      asNavFor: '.product-large-slider',
      centerMode: true,
      centerPadding: 0,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
      responsive: [{
          breakpoint: 576,
          settings: {
              slidesToShow: 3,
          }
      }]
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
  }

}
