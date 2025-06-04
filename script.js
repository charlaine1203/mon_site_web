
document.addEventListener('DOMContentLoaded',() =>
{
    const themeswitcher=document.getElementById('theme-label');
    const maincontent=document.getElementById('main-content');
    const currentTheme=localStorage.getItem('theme');
    if(currentTheme){
        maincontent.classList.add(currentTheme);
    }
    else{
        maincontent.classList.add('light-mode');
        localStorage.setItem('theme','light-mode')
    }
    themeswitcher.addEventListener('click',() =>
    {
        if(maincontent.classList.contains('dark-mode'))
        {
            maincontent.classList.remove('dark-mode');
            maincontent.classList.add('light-mode');
            localStorage.setItem('theme','light-mode');
        }
        else{
            maincontent.classList.remove('light-mode');
            maincontent.classList.add('dark-mode');
            localStorage.setItem('theme','dark-mode');
        }
    });

    const form=document.getElementById('formcontainer');
    const Password=document.getElementById('password');
    const Confirm=document.getElementById('confirm');
    const Message=document.getElementById('Message');
    const message=document.getElementById('Message1');
    form.addEventListener('submit',function(event){
        event.preventDefault();
        const pass = Password.value;
        if(pass.length < 8){
            Message.textContent="La taille minimum doit etre 8";
            Message.style.color="red";
        }
        if(Confirm != Password ){
            message.textContent="Confirmez votre mot de passe";
            message.style.color="red";
        }
    });
   document.addEventListener('DOMContentLoaded', function() {
    // Pour le premier champ de mot de passe
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    if (togglePassword && passwordInput) { // Vérifiez si les éléments existent
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.textContent = (type === 'password') ? '👁' : '🙈'; 
        });
    }

    // Pour le deuxième champ de mot de passe (confirmation)
    const confirmPasswordInput = document.getElementById('confirm');

    if (togglePassword && confirmPasswordInput) { // Vérifiez si les éléments existent
        togglePassword.addEventListener('click', function() {
            const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPasswordInput.setAttribute('type', type);
            this.textContent = (type === 'password') ? '👁' : '🙈';
        });
    }
});
});
