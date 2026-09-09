/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/*
   Close the mobile menu when the user
   clicks on one of the navigation links.
*/

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================
   TICKET SYSTEM
========================================= */

const ticketButtons =
    document.querySelectorAll(".ticket-btn");

const selectedTicket =
    document.getElementById("selectedTicket");

const quantityElement =
    document.getElementById("quantity");

const totalElement =
    document.getElementById("total");

const minusBtn =
    document.getElementById("minusBtn");

const plusBtn =
    document.getElementById("plusBtn");


/*
   Variables used to keep track
   of the selected ticket.
*/

let selectedPrice = 0;

let selectedType = "";

let quantity = 1;


/* =========================================
   SELECT TICKET
========================================= */

ticketButtons.forEach(button => {

    button.addEventListener("click", () => {

        /*
           Get the ticket information
           from the HTML data attributes.
        */

        selectedType =
            button.dataset.type;

        selectedPrice =
            Number(button.dataset.price);


        /*
           Reset quantity to 1
           when a new ticket is selected.
        */

        quantity = 1;

        quantityElement.textContent =
            quantity;


        /*
           Update selected ticket text.
        */

        selectedTicket.textContent =
            `${selectedType} - €${selectedPrice}`;


        /*
           Remove active state
           from all buttons.
        */

        ticketButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        /*
           Add active state
           to the selected button.
        */

        button.classList.add("active");


        /*
           Calculate total price.
        */

        updateTotal();


        /*
           Scroll smoothly to the
           purchase summary.
        */

        document
            .querySelector(".purchase-box")
            .scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

    });

});


/* =========================================
   INCREASE QUANTITY
========================================= */

plusBtn.addEventListener("click", () => {

    /*
       Maximum of 10 tickets.
    */

    if (quantity < 10) {

        quantity++;

        quantityElement.textContent =
            quantity;

        updateTotal();

    }

});


/* =========================================
   DECREASE QUANTITY
========================================= */

minusBtn.addEventListener("click", () => {

    /*
       Minimum of 1 ticket.
    */

    if (quantity > 1) {

        quantity--;

        quantityElement.textContent =
            quantity;

        updateTotal();

    }

});


/* =========================================
   UPDATE TOTAL PRICE
========================================= */

function updateTotal() {

    const total =
        selectedPrice * quantity;

    totalElement.textContent =
        `€${total}`;

}


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const currentItem =
            question.parentElement;


        /*
           Close all other FAQ items.
        */

        document
            .querySelectorAll(".faq-item")
            .forEach(item => {

                if (item !== currentItem) {

                    item.classList.remove("active");

                    item
                        .querySelector(".faq-answer")
                        .style.maxHeight = null;

                }

            });


        /*
           Toggle the selected FAQ item.
        */

        currentItem.classList.toggle("active");


        const answer =
            currentItem.querySelector(".faq-answer");


        /*
           Open the answer.
        */

        if (
            currentItem.classList.contains("active")
        ) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

        /*
           Close the answer.
        */

        else {

            answer.style.maxHeight = null;

        }

    });

});


/* =========================================
   PURCHASE MODAL
========================================= */

const buyBtn =
    document.getElementById("buyBtn");

const modal =
    document.getElementById("modal");

const closeModal =
    document.getElementById("closeModal");

const modalOk =
    document.getElementById("modalOk");


/*
   Open the confirmation window.
*/

buyBtn.addEventListener("click", () => {

    /*
       Check whether the user selected
       a ticket before buying.
    */

    if (selectedPrice === 0) {

        alert(
            "Please select a ticket type first."
        );

        return;

    }


    /*
       Show the modal.
    */

    modal.classList.add("show");

});


/* =========================================
   CLOSE MODAL
========================================= */

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


modalOk.addEventListener("click", () => {

    modal.classList.remove("show");

});


/*
   Close the modal when the user
   clicks outside the modal content.
*/

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


/*
   Close the modal by pressing ESC.
*/

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});
