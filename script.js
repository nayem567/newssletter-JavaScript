
// 1. Slecting Items
var main = document.getElementById('main');
var subscribe = document.getElementById('subscribe');
var success = document.getElementById('success');
var dismiss = document.getElementById('dismiss');

//2. Success Message
// subscribe.addEventListener('click', change_style);
// function change_style(event){
//     event.preventDefault();
//     main.classList.add('d-none');
//     success.classList.replace('d-none', 'd-block');
// }

// 3. DIsmiss, Back to Main
// dismiss.addEventListener('click', style_default);

// function style_default(event){
//     event.preventDefault();
//     main.classList.remove('d-none');
//     success.classList.replace('d-block', 'd-none');
// }

// =============================================

subscribe.addEventListener('click', validateEmail);

function validateEmail(event) {
    event.preventDefault();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInput = document.getElementById('email');
    let email = emailInput.value.trim();


    if (email.match(emailPattern)) {
        main.classList.add('d-none', 'blue_bg');
        success.classList.replace('d-none', 'd-block');
    } else {
        alert('Please enter a valid email');
    }
}

// =============================================

dismiss.addEventListener('click', default_style);

function default_style(event) {
    event.preventDefault();
    main.classList.remove('d-none', 'blue_bg');
    success.classList.replace('d-block', 'd-none');

      // Reset the value of the email input
      let emailInput = document.getElementById('email');
      emailInput.value = '';
}


