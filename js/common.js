document.addEventListener("DOMContentLoaded", function(){

    window.onscroll = function(){
        // console.log(document.querySelector("html").scrollTop);

        if(document.querySelector("html").scrollTop > 200 ){
            document.querySelector("header").style.top = "-100px";
        }else{
            document.querySelector("header").style.top = "0px";
        }
    }
    //패럴렉스
    window.addEventListener("DOMContentLoaded", function () {
        window.onscroll = function(){
            console.log(window.scrollY);
            //말풍선 패럴렉스
            if(window.scrollY>1100){
                document.getElementById("comment1").classList.add("active");
            } else {
                document.getElementById("comment1").classList.remove("active");
            }
            if(window.scrollY>1100){
                document.getElementById("comment2").classList.add("active");
            } else {
                document.getElementById("comment2").classList.remove("active");
            }

             //해결책 패럴렉스
            if(window.scrollY>5100){
                document.getElementById("tobe").classList.add("active");
            } else {
                document.getElementById("tobe").classList.remove("active");
            }
            //목업화면 패럴랙스
            if(window.scrollY>15300){
                document.getElementById("wrap4").classList.add("active");
            } else {
                document.getElementById("wrap4").classList.remove("active");
            }
        }
    });
    //올라가는 퍼센트
    window.onload = setTimeout(function () {
        var count1 = 1
        myTimer1 = setInterval(function () {
           
            document.getElementById("list1_per1").innerText = count1 + ".2";
            count1 ++;
            if(count1 == 83){
                clearInterval(myTimer1);
            }
        }, 35);

        var count2 = 1
        myTimer2 = setInterval(function () {
            
            document.getElementById("list1_per2").innerText = count2 + ".2";
            count2 ++;
            if(count2 == 71){
                clearInterval(myTimer2);
            }
        }, 30);

        var count3 = 1
        myTimer3 = setInterval(function () {
            
            document.getElementById("list2_per1").innerText = count3 + ".3";
            count3 ++;
            if(count3 == 72){
                clearInterval(myTimer3);
            }
        }, 40);

        var count4 = 1
        myTimer4 = setInterval(function () {
            
            document.getElementById("list2_per2").innerText = count4 + ".3";
            count4 ++;
            if(count4 == 41){
                clearInterval(myTimer4);
            }
        }, 25);
    }
    , 5000);
    //버튼을 눌러서 랜덤결과 보기
    // modal
    $(document).ready(function(){

        $('#button').click(function(){
            $('.modal').addClass('active');
        });

        $('.bg-shadow').click(function() {
            $('.modal').removeClass('active');
        });

    });

    //배열생성
    //랜덤이미지
    const images = ['result1.png', 'result2.png', 'result3.png', 'result4.png', 'result5.png', 'result6.png'];
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    $(document).ready(function(){
        $('#resultImg').css("background-image","url('img/" + chosenImage);
    });
    
    //이미지 슬라이드
    window.onload = function () {
        $('.slick_gallery').slick({
            dots: false,
            infinite: false,
            speed: 600,
            slidesToShow: 2,
            
            variableWidth: true,
            autoplay: true,
        });
        $('.slick_gallery2').slick({
            dots: false,
            infinite: true,
            slidesToShow: 1,
            autoplay: true,
        });
        $(document).ready(function(){
            $('.slick_gallery3').slick({
            dots: false,
            infinite: false,
            speed: 700,
            slidesToShow: 2,
            centerMode: false,
            variableWidth: true,
            autoplay: false,
             });
        });
    }
    //마우스 이벤트
    //일정높이까지 올라오는 토글
    // document.getElementById("wrap4").onclick = function(){
    //     document.getElementById("wrap4").classList.toggle("active");
    // };
});
