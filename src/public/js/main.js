const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')
      toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
    }


  //   document.addEventListener("DOMContentLoaded", function() {
  //     const fadeInElements = document.querySelectorAll('.fade-in');
  
  //     function checkScroll() {
  //         fadeInElements.forEach(element => {
  //             if (isElementInViewport(element)) {
  //                 element.classList.add('active');
  //             }
  //         });
  //     }
  
  //     function isElementInViewport(el) {
  //         const rect = el.getBoundingClientRect();
  //         return (
  //             rect.top >= 0 &&
  //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  //         );
  //     }
  
  //     checkScroll();
  //     window.addEventListener('scroll', checkScroll);
  // });

  
  // text fade in transition on scroll

  document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.splash, .about, .instructions, .members, .howto');
  
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, { threshold: 0.06 });
  
    elements.forEach(element => {
        observer.observe(element);
    });
  });
  