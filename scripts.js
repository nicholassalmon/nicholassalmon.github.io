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
        "12": "P-5P096268TF1141923M2WDDII",
        "20": "P-9AS52475VV103035JM2WDDTY",
        "30": "P-0RK7870067610100VM2WDD6I",
        "50": "P-9D500239H7526993NM2WDEGI"
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