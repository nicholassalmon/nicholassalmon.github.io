document.querySelectorAll('input[name="amount"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        var item = event.target.value;
        if(item === "other") {
            document.getElementById('custom-amount').style.display = 'block';
        } else {
            document.getElementById('custom-amount').style.display = 'none';
        }
    });
});
