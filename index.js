console.log("Form validation");

const Uname=document.getElementById("Uname");
const email=document.getElementById("email");
const phone=document.getElementById("phone");

let validName =false;
let validEmail =false;
let validPhone =false;

$('#success').hide();
$('#failure').hide();

Uname.addEventListener('blur',()=>{
    console.log("name is blurred");
    let regex=/^[a-zA-z]([a-zA-Z]){2,10}$/;
    let str=Uname.value;

    if(regex.test(str))
    {
        console.log("name matched");
        Uname.classList.remove("is-invalid");
        validName=true;
    }
    else
    {
        console.log("name not matched");
        Uname.classList.add("is-invalid");
        validName=false;
    }
})
email.addEventListener('blur',()=>{
    console.log("email is blurred");
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.[a-zA-Z]{2,7}$/;
    let str=email.value;

    if(regex.test(str))
    {
        console.log("email matched");
        email.classList.remove("is-invalid");
        validEmail=true;
    }
    else
    {
        console.log("email not matched");
        email.classList.add("is-invalid");
        validEmail=false;
    }
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurred");
    let regex=/^[0-9]{10}$/;
    let str=phone.value;

    if(regex.test(str))
    {
        console.log("phone matched");
        phone.classList.remove("is-invalid");
        validPhone=true;
    }
    else
    {
        console.log("phone not matched");
        phone.classList.add("is-invalid");
        validPhone=false;
    }
})

let submit=document.getElementById("submit");
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("submit button clicked");
    if(validName && validEmail && validPhone)
    {
        console.log("All fields are valid. Form is submitting.")
        let success=document.getElementById('success');
         success.classList.add('show');
        // failure.classList.remove('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log("Invalid fields. Form is not submitting");
        let failure=document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        $('#success').hide();
        $('#failure').show();
       
    }
   


})

