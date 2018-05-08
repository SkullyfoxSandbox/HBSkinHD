document.addEventListener('DOMContentLoaded', () =>{
    let formWrapper = document.querySelector('.form-wrapper'),
        inputs      = formWrapper.querySelectorAll('input');

    formWrapper.addEventListener('click', e => {
        if ( e.target.hasAttribute('display-toggle') ) {
            formWrapper.classList.toggle('toggled');
        }
    });

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentNode.classList.add('focused')
        });
        input.addEventListener('blur', () => {
            input.parentNode.classList.remove('focused')
        });
    });
});
