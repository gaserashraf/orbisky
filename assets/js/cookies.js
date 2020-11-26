// // Key under which name the cookie is saved
// const cookieName = 'cookieconsent';
// // The value could be used to store different levels of consent
// const cookieValue = 'dismissed';

// function dismiss() {
//     const date = new Date();
//     // Cookie is valid 1 year: now + (days x hours x minutes x seconds x milliseconds)
//     date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
//     // Set cookie
//     document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};path=/`;

//     // You probably want to remove the banner
//     document.querySelector('.js-cookie-banner').remove();
// }

// // Get button element
// const buttonElement = document.querySelector('.js-cookie-dismiss');
// // Maybe cookie consent is not present
// if (buttonElement) {
//     // Listen on button click
//     buttonElement.addEventListener('click', dismiss);
// }
window.onload  =function(){
    if(localStorage.getItem("cookies")!="ok")
    {
        document.querySelector('.js-cookie-banner').classList.add("show");
    }
}
const buttonElement = document.querySelector('.js-cookie-dismiss');
buttonElement.onclick=()=>{
    document.querySelector('.js-cookie-banner').remove();
    localStorage.setItem("cookies","ok");
}