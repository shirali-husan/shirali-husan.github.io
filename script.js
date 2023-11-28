$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
    });
    //this is where the toggle menu bar lives
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.homebar').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.aboutbar').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.projectbar').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.skillsbar').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    document.addEventListener("DOMContentLoaded", function() {
        // Toggle the mobile menu
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');
        
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            this.classList.toggle('active');
        });
    
        // Smooth scrolling for menu items
        document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                // Close the menu if open in mobile view
                menu.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    });

});