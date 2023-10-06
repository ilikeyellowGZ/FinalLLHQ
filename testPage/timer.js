const amountElement = document.getElementById("amount");
const close = document.getElementById("close");
const donationTab = document.getElementById("dona");
const Donations = document.getElementById("Donations");

paypal
  .Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              value: amountElement.value,
            },
          },
        ],
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert("Transaction Approved" + details.payer.name.given_name);
      });
    },
  })
  .render("#paypal");

close.addEventListener("click", () => {
  donationTab.classList.remove("show");
  donationTab.classList.add("hide");
});
Donations.addEventListener("click", () => {
  donationTab.classList.remove("hide");
  donationTab.classList.add("show");
});
