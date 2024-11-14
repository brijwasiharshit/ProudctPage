
    const scrollContainer = document.querySelector('.product_page_course_card');

    function scrollLeft() {
        console.log("scroll left called");
        scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
    }

    function scrollRight() {
        console.log("scroll right called");
        scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
    }
