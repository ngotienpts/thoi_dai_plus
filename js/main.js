document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelectorAll(".show-submenu");

  // width document
  var widthDoc = document.querySelector("body");

  const app = {
    // su ly cac su kien
    handleEvent: function () {
      const _this = this;

      // when click back top
      if (backTop) {
        backTop.onclick = function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        };
      }
      // show sub menu
      if (showSubMenu) {
        showSubMenu.forEach(function(index){
          index.onclick = function () {
            if (subMenu) {
              subMenu.classList.add("active");
            }
          };
        })
      }
      if (subMenu) {
        var subListMenu = subMenu.querySelectorAll(".sub-menu-mb-item");
        var closeSubMenu = subMenu.querySelector(".close-sub-menu");
        subListMenu.forEach(function (a) {
          if (a.querySelector(".sub-menu-mb-icon")) {
            a.querySelector(".sub-menu-mb-icon").onclick = function () {
              if (a.classList.contains("active")) {
                a.classList.remove("active");
              } else {
                a.classList.add("active");
              }
            };
          }
        });
        closeSubMenu.onclick = function () {
          subMenu.classList.remove("active");
        };
      }
      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // slide navbar mb
    slideNavbarMb: function () {
      $(".navigation-bar-list--mb").slick({
        infinite: false,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth:true,
      });
    },
    // slide idea
    slideIdea: function () {
      $(".idea-content").slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
      });
    },
    // slide index
    slideIndex:function(){
      $(".tabs")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: '.tab-content',
          focusOnSelect: true,
          infinite: false,
        });
      $(".tab-content").not(".slick-initialized").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.tabs',
        infinite: false,
        dots: false,
        fade: true,
        arrows: false,
      });
    },
    // scroll top
    scrollFunc: function () {
      if (backTop) {
        if (
          document.body.scrollTop > 300 ||
          document.documentElement.scrollTop > 300
        ) {
          backTop.style.opacity = 1;
          backTop.style.visibility = "visible";
        } else {
          backTop.style.opacity = 0;
          backTop.style.visibility = "hidden";
        }
      }
    },
    // window scroll
    windowScroll: function () {
      var _this = this;
      window.onscroll = function () {
        // scroll top
        _this.scrollFunc();
      };
    },
    // khoi tao function start
    start: function () {
      // su ly cac su kien
      this.handleEvent();
      // window scroll
      this.windowScroll();
      // slide navbar mb
      this.slideNavbarMb();
      // slide idea
      this.slideIdea();
      // slide index
      this.slideIndex();
    },
  };

  app.start();
});
