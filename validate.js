function validate() { 
  var fname      = formval.name.value;
  var femail     = formval.email.value;
  var ftel       = formval.tel.value;
  var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var tel_Regex  = /^[0-9]{7,10}$/;

/*NAME VALIDATION*/
  if((fname == "")||( fname == null)){
      alert('Please enter your name');
    }


/*EMAIL VALIDATION*/
  if(!femail.match(emailRegex)) {
       alert('Please enter your email');
     }

/*PHONE VALIDATION*/    
    if(!ftel.match(tel_Regex)){
      alert('Please enter a valid Phone Number');
}


/*CHECKBOX VALIDATION*/
    if ($("#check").is(":checked")){
       alert("You have agreed to proceed");
       return true;} 

    else{
        alert("Click on the checkbox to proceed");
            return false;}

return true;
}/*end of function validation */
 

/*display age*/
function ageCount()
    {
        var birthDay = formval.dob.value;
        var DOB      = new Date(birthDay);
        if(isNaN(DOB)){
           document.getElementById('ageId').innerHTML= " "; 
        }
        else{
        var today    = new Date();
        var year     = today.getFullYear() - DOB.getFullYear();
        var month    = today.getMonth() -DOB.getMonth();
        var day      = today.getDate()-DOB.getDate();
        var age      = year + "years" +" "+ month + "month" +" " + day + "days";
        document.getElementById('ageId').innerHTML= "Age :" + age; 
        return age;
        }
  }

   

/*displaying result*/

function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    $( "#results" ).append("Results:" + "<br>");
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.name + ":" +" "+ field.value +"<br>");
    });
  }

  $( ":submit" ).click( showValues );

  

  $("#submit").on("click", function(){
    var email = formval.email.value;
    var tel   = formval.tel.value;
    var a     =  ageCount();
    $( "#results" ).append(  email + " <br>" + tel + " <br>"+ a);
  
});


$("#reset").on("click", function(){
    $( "#results" ).remove();
    $( "#app" ).remove();
    $("#ageId").remove();
  
});
 
