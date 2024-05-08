const error=document.querySelectorAll(".error")
const fname=document.getElementById("firstname")
const submit=document.getElementById("submit")
const email=document.getElementById("email")
const form=document.getElementById("regform")
form.addEventListener("submit",errorfunction)
function errorfunction(e){
   let message1
   if(fname.value!=""&&!(/d/.test(fname.value)))
      message1=""
   if(fname.value==="")
         message1="**name field is required"
   if(fname.value!=""&&/\d/.test(fname.value))
         message1="**name field should contain characters only"
   if(message1!=""){
      e.preventDefault()
      error[0].innerText=message1
   }
   //for email
   let message2
   let regex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
   if(!regex.test(email.value)){
      message2="**please enter valid email"
   }
   if(email.value===""){
      message2="please enter email value"
   }
  if(email.value!=""&&regex.test(email.value)){
   message2=""
  }
   if(message2!=""){
      e.preventDefault()
      error[1].innerText=message2
   } 
   //for phone 
   let message3
   let phone = document.getElementById("phone");
   let string=phone.value;
         for (let i = 0; i < string.length; i++) {
            var ascii = string.charCodeAt(i);
            if (string!=""&&!(ascii >= 48 && ascii <= 57)) {
               message3="please enter digits only"
            }
         }
         for (let i = 0; i < string.length; i++) {
            var ascii = string.charCodeAt(i);
            console.log(ascii)
            if (string!=""&&(ascii >= 48 && ascii <= 57)) {
               message3=""
            }
         }

         if(phone.value===""){
            message3="please enter phone number"
         }
         if(phone.value.length<10&&phone.value.length>1){
            message3="please enter 10 digit number"
         }

      if(message3!=""){
         e.preventDefault()
         error[2].innerText=message3
      }
   //for aadhar
   let message4
   let aadhar=document.getElementById("aadhar")
   let regex1=/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/
      var value = aadhar.value
      var formattedValue = "";
      if(value.length===12){
        for (var i = 0; i < value.length; i++) {
          if (i % 4 == 0 && i > 0) {
            formattedValue += " ";
          }
          formattedValue += value[i];
          console.log(formattedValue)
        }
        aadhar.value = formattedValue;
      }
        if(aadhar.value==="")
         message4="please enter aadhar number"
      if(aadhar.value!=""&&!regex1.test(aadhar.value)){
         message4="please enter valid aadhar number"
      }
      if(aadhar.value!=""&&regex1.test(aadhar.value)){
         message4=""
      }
      if(message4!=""){
         e.preventDefault()
         error[3].innerText=message4
      }
      if(message1===""&& message2===""&&message3===""&&message4===""){
         alert("your form is successfully submitted")
      } 
      
}



   