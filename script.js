// ========================================
// ALL DATA — DELHI NCR
// ========================================

var requirementsData = [
    { icon: "bi-house-door", title: "Buy a Home" },
    { icon: "bi-key", title: "Rent a Home" },
    { icon: "bi-shop", title: "Sell Property" },
    { icon: "bi-building", title: "Flat / Apartment" },
    { icon: "bi-buildings", title: "Builder Floor" },
    { icon: "bi-tree", title: "Plot / Land" },
    { icon: "bi-bank", title: "Home Loan" },
    { icon: "bi-graph-up", title: "Investment" }
];

var propertiesData = [
    {
        id: 1,
        title: "Luxury 4 BHK Villa",
        location: "DLF Phase 5, Gurgaon",
        price: "₹3.5 Cr",
        period: "",
        type: "villa",
        badge: "For Sale",
        badgeClass: "sale",
        beds: 4, baths: 4, area: "4,500",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop"
    },
    {
        id: 2,
        title: "Modern 2 BHK Apartment",
        location: "Sector 150, Noida",
        price: "₹25,000",
        period: "/month",
        type: "apartment",
        badge: "For Rent",
        badgeClass: "rent",
        beds: 2, baths: 2, area: "1,200",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Premium 3 BHK Floor",
        location: "Sector 45, Gurgaon",
        price: "₹1.8 Cr",
        period: "",
        type: "house",
        badge: "For Sale",
        badgeClass: "sale",
        beds: 3, baths: 3, area: "2,400",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    },
    {
        id: 4,
        title: "Sky Penthouse",
        location: "Sector 128, Noida",
        price: "₹4.2 Cr",
        period: "",
        type: "penthouse",
        badge: "New Launch",
        badgeClass: "new",
        beds: 4, baths: 4, area: "5,000",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Garden Villa",
        location: "Greater Noida West",
        price: "₹2.1 Cr",
        period: "",
        type: "villa",
        badge: "For Sale",
        badgeClass: "sale",
        beds: 5, baths: 5, area: "3,800",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Smart 3 BHK Apartment",
        location: "Dwarka Expressway, Gurgaon",
        price: "₹95 Lakh",
        period: "",
        type: "apartment",
        badge: "For Sale",
        badgeClass: "sale",
        beds: 3, baths: 2, area: "1,800",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop"
    },
    {
        id: 7,
        title: "Furnished Studio Apartment",
        location: "Sector 62, Noida",
        price: "₹15,000",
        period: "/month",
        type: "apartment",
        badge: "For Rent",
        badgeClass: "rent",
        beds: 1, baths: 1, area: "550",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    },
    {
        id: 8,
        title: "Independent House",
        location: "Vasant Kunj, South Delhi",
        price: "₹5.5 Cr",
        period: "",
        type: "house",
        badge: "For Sale",
        badgeClass: "sale",
        beds: 5, baths: 4, area: "4,200",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop"
    },
    {
        id: 9,
        title: "Duplex Penthouse",
        location: "Golf Course Road, Gurgaon",
        price: "₹7.8 Cr",
        period: "",
        type: "penthouse",
        badge: "Premium",
        badgeClass: "new",
        beds: 5, baths: 5, area: "6,500",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop"
    }
];

var servicesData = [
    { icon: "bi-house-check", title: "Property Buying", desc: "Find and purchase your dream property across Delhi NCR with RERA verified listings." },
    { icon: "bi-cash-stack", title: "Property Selling", desc: "Get the best value for your property with strategic marketing and expert negotiation." },
    { icon: "bi-key-fill", title: "Rental Services", desc: "Premium rental properties or list your property for maximum exposure across NCR." },
    { icon: "bi-bank2", title: "Home Loan Assistance", desc: "Best home loan deals from top banks. Complete documentation and processing support." },
    { icon: "bi-clipboard-check", title: "Legal & Documentation", desc: "Complete legal verification, registry assistance, and documentation for all transactions." },
    { icon: "bi-rulers", title: "Interior Design", desc: "Transform your new home with our trusted interior design and renovation partners." }
];

var testimonialsData = [
    {
        name: "Rajesh Sharma", role: "Home Buyer, Noida",
        text: "Homyz helped us find our dream 3 BHK in Sector 150, Noida. The process from site visit to registry was smooth. Highly recommended!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5
    },
    {
        name: "Priya Mehta", role: "Investor, Gurgaon",
        text: "I've invested in multiple properties through Homyz. Their market knowledge of Gurgaon is exceptional. They always find great ROI deals.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5
    },
    {
        name: "Amit Verma", role: "Home Seller, Delhi",
        text: "They sold our property in Dwarka within 3 weeks at a great price! Marketing and negotiation was excellent. Sam and team are truly professional.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg", rating: 5
    },
    {
        name: "Sneha Gupta", role: "First-time Buyer, Greater Noida",
        text: "As a first-time buyer, I was nervous. The Homyz team guided us through every step — from loan approval to possession. Amazing experience!",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5
    }
];

var whyUsData = [
    { icon: "bi-shield-lock-fill", title: "RERA Verified", desc: "All properties are RERA registered and legally verified for your peace of mind." },
    { icon: "bi-currency-rupee", title: "Best Price Guarantee", desc: "We ensure you get the most competitive prices in the Delhi NCR market." },
    { icon: "bi-people-fill", title: "Expert Team", desc: "Experienced agents with deep knowledge of every NCR locality." },
    { icon: "bi-clock-history", title: "15+ Years Experience", desc: "Trusted by thousands of families since 2009 across Delhi NCR." },
    { icon: "bi-hand-thumbs-up-fill", title: "Zero Brokerage*", desc: "Selected properties available with zero brokerage for buyers." },
    { icon: "bi-house-heart-fill", title: "After-Sale Support", desc: "We stay with you even after the deal — from possession to interiors." }
];

var localitiesData = [
    { name: "Noida", area: "Sector 44, 62, 137, 150", count: "120+", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" },
    { name: "Gurgaon", area: "DLF, Sohna Road, Golf Course", count: "95+", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop" },
    { name: "Greater Noida", area: "Alpha, Beta, Pari Chowk", count: "80+", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" },
    { name: "South Delhi", area: "Vasant Kunj, Saket, GK", count: "60+", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop" },
    { name: "Dwarka, Delhi", area: "Sector 6, 7, 10, 22", count: "55+", image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop" },
    { name: "Faridabad", area: "Sector 14, 15, Neharpar", count: "45+", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop" }
];


// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener("DOMContentLoaded", function () {

    // AOS Initialize
    AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 80
    });

    // Preloader
    setTimeout(function () {
        var preloader = document.getElementById("preloader");
        preloader.classList.add("hidden");
        setTimeout(function () { preloader.remove(); }, 600);
    }, 2200);

    // Render sections
    renderRequirements();
    renderProperties("all");
    renderServices();
    renderTestimonials();
    renderWhyUs();
    renderLocalities();

    // Setup interactions
    setupNavbar();
    setupBackToTop();
    setupCounter();
    setupSearchTabs();
    setupFilterButtons();
    setupContactForm();
    setupNewsletterForm();
    setupSmoothScroll();
});


// ========================================
// RENDER FUNCTIONS
// ========================================

function renderRequirements() {
    var container = document.getElementById("requirementCards");
    if (!container) return;
    var html = "";
    for (var i = 0; i < requirementsData.length; i++) {
        var item = requirementsData[i];
        html += '<div class="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay="' + (i * 80) + '">' +
            '<div class="requirement-card">' +
            '<div class="icon-wrapper"><i class="bi ' + item.icon + '"></i></div>' +
            '<h6>' + item.title + '</h6>' +
            '</div></div>';
    }
    container.innerHTML = html;
}

function renderProperties(filter) {
    var container = document.getElementById("propertyGrid");
    if (!container) return;

    var filtered = [];
    for (var i = 0; i < propertiesData.length; i++) {
        if (filter === "all" || propertiesData[i].type === filter) {
            filtered.push(propertiesData[i]);
        }
    }

    // Fade out
    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";

    setTimeout(function () {
        var html = "";
        for (var j = 0; j < filtered.length; j++) {
            var p = filtered[j];
            html += '<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="' + (j * 80) + '">' +
                '<div class="property-card">' +
                '<div class="property-img">' +
                '<img src="' + p.image + '" alt="' + p.title + '" loading="lazy">' +
                '<span class="property-badge ' + p.badgeClass + '">' + p.badge + '</span>' +
                '<button class="property-favorite" data-id="' + p.id + '" title="Save Property"><i class="bi bi-heart"></i></button>' +
                '</div>' +
                '<div class="property-info">' +
                '<div class="property-price">' + p.price + ' <span>' + p.period + '</span></div>' +
                '<h5 class="property-title">' + p.title + '</h5>' +
                '<p class="property-location"><i class="bi bi-geo-alt-fill"></i> ' + p.location + '</p>' +
                '<div class="property-features">' +
                '<div class="property-feature"><i class="bi bi-door-open"></i><span>' + p.beds + ' Beds</span></div>' +
                '<div class="property-feature"><i class="bi bi-droplet"></i><span>' + p.baths + ' Baths</span></div>' +
                '<div class="property-feature"><i class="bi bi-arrows-angle-expand"></i><span>' + p.area + ' sqft</span></div>' +
                '</div></div></div></div>';
        }
        container.innerHTML = html;

        setupFavoriteButtons();

        // Fade in
        container.style.transition = "all 0.5s ease";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";

        AOS.refresh();
    }, 300);
}

function renderServices() {
    var container = document.getElementById("servicesGrid");
    if (!container) return;
    var html = "";
    for (var i = 0; i < servicesData.length; i++) {
        var s = servicesData[i];
        html += '<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="' + (i * 100) + '">' +
            '<div class="service-card">' +
            '<div class="service-icon"><i class="bi ' + s.icon + '"></i></div>' +
            '<h5>' + s.title + '</h5>' +
            '<p>' + s.desc + '</p>' +
            '</div></div>';
    }
    container.innerHTML = html;
}

function renderTestimonials() {
    var container = document.getElementById("testimonialsGrid");
    if (!container) return;
    var html = "";
    for (var i = 0; i < testimonialsData.length; i++) {
        var t = testimonialsData[i];
        var stars = "";
        for (var s = 0; s < t.rating; s++) {
            stars += '<i class="bi bi-star-fill"></i> ';
        }
        html += '<div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="' + (i * 120) + '">' +
            '<div class="testimonial-card">' +
            '<div class="testimonial-stars">' + stars + '</div>' +
            '<p class="testimonial-text">"' + t.text + '"</p>' +
            '<div class="testimonial-author">' +
            '<img src="' + t.avatar + '" alt="' + t.name + '" class="testimonial-avatar" loading="lazy">' +
            '<div><div class="testimonial-name">' + t.name + '</div>' +
            '<div class="testimonial-role">' + t.role + '</div></div>' +
            '</div></div></div>';
    }
    container.innerHTML = html;
}

function renderWhyUs() {
    var container = document.getElementById("whyUsGrid");
    if (!container) return;
    var html = "";
    for (var i = 0; i < whyUsData.length; i++) {
        var item = whyUsData[i];
        html += '<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="' + (i * 100) + '">' +
            '<div class="why-us-card">' +
            '<div class="why-us-icon"><i class="bi ' + item.icon + '"></i></div>' +
            '<h5>' + item.title + '</h5>' +
            '<p>' + item.desc + '</p>' +
            '</div></div>';
    }
    container.innerHTML = html;
}

function renderLocalities() {
    var container = document.getElementById("localitiesGrid");
    if (!container) return;
    var html = "";
    for (var i = 0; i < localitiesData.length; i++) {
        var loc = localitiesData[i];
        html += '<div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="' + (i * 100) + '">' +
            '<div class="locality-card">' +
            '<img src="' + loc.image + '" alt="' + loc.name + '" loading="lazy">' +
            '<div class="locality-overlay">' +
            '<span class="property-count">' + loc.count + ' Properties</span>' +
            '<h5>' + loc.name + '</h5>' +
            '<p><i class="bi bi-geo-alt-fill me-1"></i>' + loc.area + '</p>' +
            '</div></div></div>';
    }
    container.innerHTML = html;
}


// ========================================
// NAVBAR
// ========================================
function setupNavbar() {
    var nav = document.getElementById("mainNav");
    var navLinks = document.querySelectorAll(".nav-link");
    var sections = document.querySelectorAll("section[id], header[id]");

    window.addEventListener("scroll", function () {
        // Background toggle
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }

        // Active link
        var current = "";
        for (var i = 0; i < sections.length; i++) {
            var sectionTop = sections[i].offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = sections[i].getAttribute("id");
            }
        }

        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
            if (navLinks[j].getAttribute("href") === "#" + current) {
                navLinks[j].classList.add("active");
            }
        }
    });

    // Close mobile menu on link click
    for (var k = 0; k < navLinks.length; k++) {
        navLinks[k].addEventListener("click", function () {
            var navCollapse = document.getElementById("navbarNav");
            if (navCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navCollapse).hide();
            }
        });
    }
}


// ========================================
// BACK TO TOP
// ========================================
function setupBackToTop() {
    var btnTop = document.getElementById("btn-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 400) {
            btnTop.classList.add("visible");
        } else {
            btnTop.classList.remove("visible");
        }
    });

    btnTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


// ========================================
// COUNTER (Intersection Observer)
// ========================================
function setupCounter() {
    var counters = document.querySelectorAll(".counter");
    var started = false;

    function animateCounters() {
        for (var i = 0; i < counters.length; i++) {
            (function (counter) {
                var target = parseInt(counter.getAttribute("data-target"));
                var steps = 60;
                var step = 0;

                function update() {
                    step++;
                    var progress = step / steps;
                    var eased = 1 - (1 - progress) * (1 - progress);
                    var current = Math.round(target * eased);
                    counter.textContent = current;

                    if (step < steps) {
                        requestAnimationFrame(update);
                    } else {
                        counter.textContent = target;
                    }
                }

                update();
            })(counters[i]);
        }
    }

    var observer = new IntersectionObserver(function (entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting && !started) {
                started = true;
                animateCounters();
            }
        }
    }, { threshold: 0.5 });

    var statsSection = document.querySelector(".hero-stats");
    if (statsSection) observer.observe(statsSection);
}


// ========================================
// SEARCH TABS
// ========================================
function setupSearchTabs() {
    var tabBtns = document.querySelectorAll(".tab-btn");

    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].addEventListener("click", function () {
            for (var j = 0; j < tabBtns.length; j++) {
                tabBtns[j].classList.remove("active");
            }
            this.classList.add("active");
        });
    }

    var searchForm = document.getElementById("searchForm");
    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
            showToast("🔍 Search feature coming soon! Contact us for inquiries.", "info");
        });
    }
}


// ========================================
// FILTER BUTTONS
// ========================================
function setupFilterButtons() {
    var filterBtns = document.querySelectorAll(".filter-btn");

    for (var i = 0; i < filterBtns.length; i++) {
        filterBtns[i].addEventListener("click", function () {
            for (var j = 0; j < filterBtns.length; j++) {
                filterBtns[j].classList.remove("active");
            }
            this.classList.add("active");
            renderProperties(this.getAttribute("data-filter"));
        });
    }
}


// ========================================
// FAVORITE BUTTONS
// ========================================
function setupFavoriteButtons() {
    var favBtns = document.querySelectorAll(".property-favorite");

    for (var i = 0; i < favBtns.length; i++) {
        favBtns[i].addEventListener("click", function () {
            var icon = this.querySelector("i");

            this.classList.toggle("liked");

            if (this.classList.contains("liked")) {
                icon.classList.remove("bi-heart");
                icon.classList.add("bi-heart-fill");
                this.style.transform = "scale(1.3)";
                var btn = this;
                setTimeout(function () { btn.style.transform = "scale(1)"; }, 200);
                showToast("❤️ Property saved to favorites!", "success");
            } else {
                icon.classList.remove("bi-heart-fill");
                icon.classList.add("bi-heart");
                showToast("Property removed from favorites.", "info");
            }
        });
    }
}


// ========================================
// CONTACT FORM — Google Sheets
// ========================================
function setupContactForm() {
    var scriptURL = "https://script.google.com/macros/s/AKfycbwBSQI6JjBKaDBd0I1cZ7lNbOuPXCW2LgXnvFehyLQ23L-IXbUBH_V5huL9SdMIy0eXQg/exec";
    var form = document.forms["google-sheet"];
    var submitBtn = document.getElementById("submitBtn");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = form.querySelector("#name").value.trim();
        var email = form.querySelector("#email").value.trim();
        var phone = form.querySelector("#phone").value.trim();
        var message = form.querySelector("#message").value.trim();

        // Required fields
        if (!name || !email || !phone || !message) {
            showToast("⚠️ Please fill in all required fields!", "error");
            return;
        }

        // Email check
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast("⚠️ Please enter a valid email address!", "error");
            return;
        }

        // Indian phone check
        var cleanPhone = phone.replace(/[\s\-\+]/g, "");
        if (cleanPhone.indexOf("91") === 0) cleanPhone = cleanPhone.substring(2);
        var phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(cleanPhone)) {
            showToast("⚠️ Please enter a valid 10-digit phone number!", "error");
            return;
        }

        // Loading state
        var btnText = submitBtn.querySelector(".btn-text");
        var btnLoading = submitBtn.querySelector(".btn-loading");
        btnText.classList.add("d-none");
        btnLoading.classList.remove("d-none");
        submitBtn.disabled = true;

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then(function () {
                var modal = new bootstrap.Modal(document.getElementById("successModal"));
                modal.show();
                form.reset();
            })
            .catch(function (error) {
                showToast("❌ Something went wrong. Please try again!", "error");
                console.error("Error!", error.message);
            })
            .finally(function () {
                btnText.classList.remove("d-none");
                btnLoading.classList.add("d-none");
                submitBtn.disabled = false;
            });
    });
}


// ========================================
// NEWSLETTER
// ========================================
function setupNewsletterForm() {
    var form = document.getElementById("newsletterForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var emailInput = this.querySelector("input[type='email']");
        if (emailInput.value.trim()) {
            showToast("🎉 Thanks for subscribing! You'll get property updates soon.", "success");
            emailInput.value = "";
        }
    });
}


// ========================================
// SMOOTH SCROLL
// ========================================
function setupSmoothScroll() {
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = this.getAttribute("href");
            if (targetId === "#") return;
            var target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
}


// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type) {
    type = type || "success";

    // Remove existing
    var existing = document.querySelector(".custom-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.className = "custom-toast " + type;

    var iconClass = "bi-check-circle-fill";
    var bgColor = "#10b981";

    if (type === "error") {
        iconClass = "bi-exclamation-circle-fill";
        bgColor = "#ef4444";
    } else if (type === "info") {
        iconClass = "bi-info-circle-fill";
        bgColor = "#3b82f6";
    }

    toast.innerHTML = '<i class="bi ' + iconClass + '"></i><span>' + message + '</span>';

    toast.style.cssText = "position:fixed;top:100px;right:20px;padding:15px 25px;background:" +
        bgColor + ";color:white;border-radius:12px;display:flex;align-items:center;gap:10px;" +
        "z-index:99999;font-size:14px;font-weight:500;box-shadow:0 10px 40px rgba(0,0,0,0.2);" +
        "font-family:'Poppins',sans-serif;max-width:380px;animation:slideInRight 0.5s ease;";

    // Add animation styles once
    if (!document.getElementById("toast-styles")) {
        var style = document.createElement("style");
        style.id = "toast-styles";
        style.textContent =
            "@keyframes slideInRight{from{transform:translateX(120%);opacity:0}to{transform:translateX(0);opacity:1}}" +
            "@keyframes slideOutRight{from{transform:translateX(0);opacity:1}to{transform:translateX(120%);opacity:0}}";
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Auto remove
    setTimeout(function () {
        toast.style.animation = "slideOutRight 0.5s ease";
        setTimeout(function () {
            if (toast.parentNode) toast.remove();
        }, 500);
    }, 3000);
}


// ========================================
// TYPED LOCATION EFFECT IN HERO
// ========================================
(function () {
    var locations = ["Noida", "Gurgaon", "Greater Noida", "Faridabad", "South Delhi", "Dwarka"];
    var heroSubtitle = document.querySelector(".hero-subtitle");

    if (!heroSubtitle) return;

    // Create typed wrapper
    var typedWrapper = document.createElement("div");
    typedWrapper.style.cssText = "font-size:18px;color:rgba(255,255,255,0.8);font-weight:500;margin-top:8px;margin-bottom:10px;";
    typedWrapper.innerHTML = '<i class="bi bi-geo-alt-fill" style="color:#e74c3c;margin-right:8px;"></i>Currently serving: ';

    var typedSpan = document.createElement("span");
    typedSpan.style.cssText = "color:#f39c12;border-right:2px solid #f39c12;padding-right:4px;";
    typedWrapper.appendChild(typedSpan);

    heroSubtitle.parentNode.insertBefore(typedWrapper, heroSubtitle.nextSibling);

    var currentIndex = 0;
    var currentText = "";
    var isDeleting = false;

    function typeEffect() {
        var fullText = locations[currentIndex];

        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }

        typedSpan.textContent = currentText;

        var typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentText === fullText) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % locations.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    // Start after preloader
    setTimeout(typeEffect, 2500);
})();