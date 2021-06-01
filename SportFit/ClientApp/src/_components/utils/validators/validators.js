const checkValidation = (formName) => {
    'use strict'
    let forms = document.querySelectorAll(`.${formName}`)

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
}

export default checkValidation;