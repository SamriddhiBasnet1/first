
    $(".add_btn").on("click",function(){
    var wrapper = $(".phn_wrp");
   
 
     $(".add_btn").click(function(){
           $(wrapper).append('<input type="text" id="tel"  class="txt"><button id="section" class="add_b">+ PHONE</button><button class="btn_re">-PHONE</button><br><br>');
       });

    $(wrapper).on("click",".btn_re", function(){ 
        $(this).parent('div').remove(); 
    });

    /* $(wrapper).on("click",".add_b", function(){ 
        $(this).parent('div').append('<input type="text" id="tel"  class="txt"><button id="section" class="add_b">+ PHONE</button><button class="btn_re" >-PHONE</button><br><br>'); 
    });*/
    

});

