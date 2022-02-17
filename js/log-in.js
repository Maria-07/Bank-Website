// button 

document.getElementById('submit-btn').addEventListener('click',
    function (e) {
        e.preventDefault();
        const getEmail = document.getElementById('user-email');
        const userEmail = getEmail.value;
        console.log(userEmail);

        // get password 
        const getpassword = document.getElementById('user-password');
        const userpass = getpassword.value;
        console.log(userpass);

        if (userEmail == 'maria@gmail.com' && userpass == '123') {
            window.location.href = "banking.html";
        }
    })