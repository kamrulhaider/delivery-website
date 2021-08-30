document.getElementById('paypal-id').addEventListener('click', function () {
    document.getElementById('paypal-id').style.backgroundColor = '#bbbec5';
    document.getElementById('card-id').style.backgroundColor = '#ffffff';
});
document.getElementById('card-id').addEventListener('click', function () {
    document.getElementById('card-id').style.backgroundColor = '#bbbec5';
    document.getElementById('paypal-id').style.backgroundColor = '#ffffff';
});