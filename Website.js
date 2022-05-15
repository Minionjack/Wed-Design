const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
            //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });

}
navSlide();

// Email JS
function validate(){
    let name=document.querySelector (".name");
    let email=document.querySelector(".email");
    let msg=document.querySelector(".message");    
    let sendBtn=document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) => {})
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        } 
   };

validate();

function sendmail(name, email, msg){
    emailjs.send ("service_5x7fysc","template_d0wy3ya",{
       from_name: email,
       to_name: name,
       message: msg,
       });
   }

function emptyerror() {
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
  });
}
function success() {
    swal({
      title: "Email sent successfully",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
  }
