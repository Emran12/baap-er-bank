const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function () {
    const userEmail = document.getElementById('email');
    const userPassword = document.getElementById('password');
    if (userEmail.value == 'sontan@baap.com' && userPassword.value == 'secret') {
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invaild User');
    }

})