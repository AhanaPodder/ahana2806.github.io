 $(document).ready(function(){
     var count=0;
     designer_animation();
     function designer_animation(){
         setTimeout(function(){
             count ++;
             if(count==1){
                 title="D";
             }
             else if(count==2){
                 title="DE"
             }
             else if(count==3){
                 title="DES";
             }
             else if(count==4){
                 title="DESI";
             }
             else if(count==5){
                 title="DESIG";
             }
             else if(count==6){
                 title="DESIGN";
             }
             else if(count==7){
                 title="DESIGNE";
             }
             else if(count==8){
                 title="DESIGNER";
             }
             if(count!=9){
                 $('.title').text(`I'm a ${title}`);
                 designer_animation();
             }
             else if(count==9){
                 count=0;
                 setTimeout(function(){
                     designer_animation();
                 }, 1000);
             }
         })
     }
 })

 animate_title();
 function animate_title(){
     setTimeout(function(){
         $(".java_name").animate({frontsize:"+=30px"}, 500);
         $(".java_name").animate({letterSpacing:"+=15px"}, 1000);
         $(".adobe_name").animate({fontsize:"+=30px"}, 500);
         $(".adobe_name").animate({letterspacing:"+=15px"}, 1000);
         $(".php_name").animate({fontsize:"+=30px"}, 500);
         $(".php_name").animate({letterspacing:"+=15px"}, 1000);
         animate_name();

         setTimeout(function(){
            $(".java_name").animate({frontsize:"-=30px"}, 500);
            $(".java_name").animate({letterSpacing:"-=15px"}, 1000);
            $(".adobe_name").animate({fontsize:"-=30px"}, 500);
            $(".adobe_name").animate({letterspacing:"-=15px"}, 1000);
            $(".php_name").animate({fontsize:"-=30px"}, 500);
            $(".php_name").animate({letterspacing:"-=15px"}, 1000);
            animate_name();    
         }, 4000);
     }, 2000)
 }


     project_count++;
     $('.actual').attr('src','/img/project_' +project_count+ '.png')
     if(project_count==1){
         $('.project_name').text("IOT Application of Smart Shopping System");
         $('.project_content').text('This project contains RFID code which will be used to scan the products in smart way')
        }


