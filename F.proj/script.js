$(".lang-item").click(function (e) { 
    e.preventDefault();
    let datatxt = $(this).attr("data-text")
    $(".lang-main").text(datatxt) ;
    
});

//

$(".gel-item").click(function (e) { 
    e.preventDefault();
    let text = $(this).text();
    $(".gel-value").text(text)
    
});

//

$(".main-search").click(function (e) { 
    e.preventDefault();
    let that = $(this)
    $(".overflow-srch").slideToggle(300)
    if(that.hasClass("bi-x-lg")){
        that.removeClass("bi-x-lg").addClass("bi-search")
    }else{
        that.removeClass("bi-search").addClass("bi-x-lg")
    }
    
});

// 


var swiper = new Swiper(".mySwiper", {
    slidesPerView:3,
    spaceBetween: 40,
    freeMode: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },

  });
    

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 5,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },  
  });

  var swiper = new Swiper(".mySwiper7", {
    slidesPerView: 7,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next7",
      prevEl: ".swiper-button-prev7",
    },
  });

  var swiper = new Swiper(".mySwiper5", {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },  
  });

  // 

        let numb = 5000;
    setInterval(function(){
        
        $(".data-new").html(numb)
        numb --;
     }, 1000);