const nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (window.scrollY > 300) {
        nav.classList.remove("mt-4");
        nav.classList.add("navbar-shadow");
    } else {
        nav.classList.add("mt-4");
        nav.classList.remove("navbar-shadow");
    }
};

// pop up nav nationalty
const nav_item = document.querySelectorAll(".nationality span");

nav_item.forEach((ele) => {
    ele.onclick = function(e) {
        if (!this.classList.contains("active")) {
            let other = [...nav_item].filter(function() {
                return e != this;
            });
            other.forEach((o) => {
                o.classList.remove("active");
                o.classList.remove("active-color");
            });

            this.classList.add("active");
            this.classList.add("active-color");
        }

        document.querySelectorAll(".join-representative-form").forEach((f) => {
            f.classList.add("d-none");
        });
        document
            .querySelector(`.${this.getAttribute("data-nat")}`)
            .classList.remove("d-none");
    };
});

const car_bycle_nav = document.querySelectorAll(".car-bycle-nav span");
const form_hidden_value = document.querySelectorAll(".car-bycle-hidden");
car_bycle_nav.forEach((element) => {
    element.onclick = function() {
        this.classList.add("active");
        if (this.nextElementSibling)
            this.nextElementSibling.classList.remove("active");
        if (this.previousElementSibling)
            this.previousElementSibling.classList.remove("active");
        form_hidden_value.forEach((form_value) => {
            form_value.value = this.getAttribute("data-type");
        });
    };
});