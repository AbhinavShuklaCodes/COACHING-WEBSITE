let Email=document.querySelector("#userEmail");
let Password=document.querySelector("#userPassword");
let loginBtn=document.querySelector("#loginBtn");
let checkBtn=document.querySelector("#check-btn")


let adminDetails={
    email:"admin@123gmail.com",
    password:"123456789"
}
loginBtn.addEventListener("click",(e)=>{

    let userEmail=Email.value
    let userPassword=Password.value

    e.preventDefault()

    if(adminDetails.email===userEmail && adminDetails.password===userPassword){
        alert("access")
        if(checkBtn.checked){
            localStorage.setItem("email",userEmail)
            localStorage.setItem("rememberMe",true)
        }else{
            localStorage.removeItem("email")
            localStorage.removeItem("rememberMe")
        }
    }else{
        alert("access denied")
        Email.value=""
        Password.value=""
    }
})