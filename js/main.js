document.addEventListener("DOMContentLoaded", function () {
  // back top
  var backTop = document.querySelector("#back-top");

  // show sub menu mb
  var subMenu = document.querySelector(".sub-menu-mb-wrapper");
  var showSubMenu = document.querySelectorAll(".show-submenu");

  // width document
  var widthDoc = document.querySelector("body");

  // show search pc
  var searchPc = document.querySelector('.navigation-bar-search')

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

      // show search pc
      if(searchPc){
        searchPc.onclick = function(){
          searchPc.parentElement.parentElement.querySelector('.navigation-bar-form').classList.toggle('active')
        }
      }

      // hide cac element khi click ra ngoai
      document.addEventListener("click", function (e) {});
    },
    // slide picture
    slidePicture:function(){
      $(".picture-img-filed")
        .not(".slick-initialized")
        .slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.picture-thumb-list',
          // autoplay:true,
          speed:300,
          lazyLoad:'ondemand'
        });
      $(".picture-thumb-list").not(".slick-initialized").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.picture-img-filed',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
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
      // slide picture
      this.slidePicture();
    },
  };

  app.start();
});
