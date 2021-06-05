const bootstrap = require('bootstrap');

export const scrollToTop = () => {
    document.documentElement.scrollIntoView(true)
}

export const notificationToast = () => {
    const option = {
        animation: true,
        delay: 4000
    }

    let toastHTMLElement = document.getElementById('notificationToast');
    let toastElement = new bootstrap.Toast(toastHTMLElement, option);
    toastElement.show();
}
