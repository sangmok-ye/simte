var Swiper = new Swiper ('#container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type : 'fraction'
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowTouchMove : false,
  on:{
    slideChange : function(){
      if($(".swiper-slide:nth-last-child(2)").hasClass(".swiper-slide-active")){
        // next.addClass("swiper-button-disabled")
      }
    }
  }
})

let valueArr=[];
let prev = $(".swiper-button-prev")
let next = $(".swiper-button-next")
$(".btn_box .btn").click(function(){
  let liIndex = $(this).parents(".swiper-slide").index(); // 11
  let liLen = $(".swiper-slide").length; // 12
    
  if(liIndex<(liLen-1)){
    
    $(".swiper-button-next").click(); 
    if(!valueArr[liIndex]){
      valueArr.push($(this).attr("data-val"))
    }else{
      valueArr[liIndex] = $(this).attr("data-val");
    }
  }else{
    valueArr.push($(this).attr("data-val"))
    submit();
  }
  console.log(valueArr)
  return false;
})

prev.click(function(){
  let activeIndex = $(".swiper-slide-active").index(); 
  if(!valueArr[activeIndex]){
    next.addClass("visible")
  }else{
    next.removeClass("visible")
  }
})


function submit(){
  let len = valueArr.length;
  let result1 = [];
  let result2 = [];
  let result3 = [];
  for(i=0;i<len;i++){
    if(valueArr.indexOf(valueArr[i]) == valueArr.lastIndexOf(valueArr[i])){
      result1.push(valueArr[i])
    }
  } 
  valueArr.forEach(function(el){
    if(!result1.includes(el)) result2.push(el)
  })

  result2.forEach((el)=>{
    if(!result3.includes(el))
    result3.push(el)
  })

  for(i=0;i<result3.length;i++){
    let text = $(".modal span").text()
    $(".modal span").text(text+result3[i])
  }
  $(".modal").addClass("on")

}

$(".modal .btn").click(function(){
  location.reload()
})
