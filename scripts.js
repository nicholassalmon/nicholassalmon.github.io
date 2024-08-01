document.querySelectorAll('.amount-btn').forEach((btn) => {
    btn.addEventListener("click", function(event) {
        document.querySelectorAll('.amount-btn').forEach((btn) => {
            btn.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        var amount = event.currentTarget.getAttribute('data-amount');
        if (amount === "other") {
            document.getElementById('custom-amount').style.display = 'block';
        } else {
            document.getElementById('custom-amount').style.display = 'none';
        }
        updatePayPalButton(amount);
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

function updatePayPalButton(amount) {
    const planIds = {
        "12": "P-0HU54874RU5111131M2WAYRA",
        "20": "P-8J02275170692803PM2WAZJA",
        "30": "P-9C920792147412353M2WAZXI",
        "50": "P-21N451911V4636541M2WA2JY"
    };

    let planId = planIds[amount] || "YOUR_PLAN_ID_OTHER"; // Handle custom amount separately if needed

    // Clear the existing PayPal button container to force re-render
    document.getElementById('paypal-button-container').innerHTML = '';

    paypal.Buttons({
        createSubscription: function(data, actions) {
            return actions.subscription.create({
                'plan_id': planId
            });
        },
        onApprove: function(data, actions) {
            alert('You have successfully subscribed to ' + data.subscriptionID);
        }
    }).render('#paypal-button-container');
}

// Initial PayPal button render with default amount
updatePayPalButton("12"); // Assuming $12 is the default
