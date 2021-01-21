const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')!;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addressInput.nodeValue;

    // Google API　に送信
}


form.addEventListener('submit', searchAddressHandler);