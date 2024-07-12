document.querySelectorAll('.amount-btn').forEach((btn) => {
    btn.addEventListener("click", function(event) {
        document.querySelectorAll('.amount-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        var amount = event.currentTarget.getAttribute('data-amount');
        if(amount === "other") {
            document.getElementById('custom-amount').style.display = 'block';
        } else {
            document.getElementById('custom-amount').style.display = 'none';
        }
    });
});

document.querySelectorAll('.frequency-btn').forEach((btn) => {
    btn.addEventListener("click", function(event) {
        document.querySelectorAll('.frequency-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
    });
});
