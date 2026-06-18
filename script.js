document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Theme Manager (Dark / Light Mode)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  });


  // ==========================================
  // 2. Typewriter Effect
  // ==========================================
  const typewriterSpan = document.getElementById('typewriter-text');
  const roles = [
    "Machine Learning Engineer",
    "Deep Learning Researcher",
    "Data Analyst",
    "Python Programming Trainer"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typewriterSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; // Deleting is faster
    } else {
      typewriterSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100; // Normal typing speed
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2000; // Pause at full string
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Brief pause before next word
    }

    setTimeout(typeEffect, typingSpeed);
  }

  if (typewriterSpan) {
    typeEffect();
  }


  // ==========================================
  // 3. Mobile Navigation Menu Toggle
  // ==========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const allNavLinks = document.querySelectorAll('.nav-link');

  function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    const isExpanded = mobileMenuBtn.classList.contains('active');
    mobileMenuBtn.setAttribute('aria-label', isExpanded ? 'Close Menu' : 'Open Menu');
    
    const spans = mobileMenuBtn.querySelectorAll('span');
    if (isExpanded) {
      spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  }

  allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('active')) {
        toggleMobileMenu();
      }
    });
  });


  // ==========================================
  // 4. Header Scroll State & Scroll-to-Top Button
  // ==========================================
  const header = document.getElementById('main-header');
  const scrollTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollTopBtn) {
      if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'auto';
        scrollTopBtn.style.transform = 'translateY(0)';
      } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
        scrollTopBtn.style.transform = 'translateY(10px)';
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ==========================================
  // 5. Scroll Active Link Highlight
  // ==========================================
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
    let currentActive = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 160)) {
        currentActive = section.getAttribute('id');
      }
    });

    allNavLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentActive}`) {
        link.classList.add('active');
      }
    });
  });


  // ==========================================
  // 6. Intersection Observer (Scroll Reveal)
  // ==========================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const skillCards = document.querySelectorAll('.skill-card');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  skillCards.forEach(card => skillObserver.observe(card));


  // ==========================================
  // 7. Skills Tab Filter
  // ==========================================
  const filterButtons = document.querySelectorAll('.skills-tab-btn');
  const skillsDisplayGrid = document.getElementById('skills-display-grid');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      if (skillsDisplayGrid) {
        skillsDisplayGrid.style.opacity = '0';

        setTimeout(() => {
          skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterVal === 'all' || category === filterVal) {
              card.style.display = 'flex';
              setTimeout(() => card.classList.add('animated'), 30);
            } else {
              card.style.display = 'none';
            }
          });
          
          skillsDisplayGrid.style.opacity = '1';
        }, 180);
      }
    });
  });


  // ==========================================
  // 8. Work Experience Timeline Details Toggle
  // ==========================================
  const timelineToggles = document.querySelectorAll('.btn-timeline-toggle');

  timelineToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const detailsList = toggle.nextElementSibling;
      const isExpanded = !detailsList.classList.contains('collapsed');

      if (isExpanded) {
        detailsList.classList.add('collapsed');
        toggle.classList.remove('active');
        toggle.innerHTML = `View Contributions <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;
      } else {
        detailsList.classList.remove('collapsed');
        toggle.classList.add('active');
        toggle.innerHTML = `Hide Contributions <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>`;
      }
    });
  });


  // ==========================================
  // 9. Publication Abstract Toggle
  // ==========================================
  const abstractToggles = document.querySelectorAll('.btn-abstract-toggle');

  abstractToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const abstractDiv = toggle.nextElementSibling;
      const isCollapsed = abstractDiv.classList.contains('collapsed');

      if (isCollapsed) {
        abstractDiv.classList.remove('collapsed');
        toggle.classList.add('active');
        toggle.querySelector('span').textContent = 'Hide Abstract';
      } else {
        abstractDiv.classList.add('collapsed');
        toggle.classList.remove('active');
        toggle.querySelector('span').textContent = 'Read Abstract';
      }
    });
  });


  // ==========================================
  // 10. Copy to Clipboard Utility
  // ==========================================
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-clipboard-target');
      const textElement = document.querySelector(targetId);
      
      if (textElement) {
        let copyText = textElement.textContent.trim();
        
        navigator.clipboard.writeText(copyText).then(() => {
          const copyIcon = btn.querySelector('.copy-icon');
          const checkIcon = btn.querySelector('.check-icon');
          
          copyIcon.style.display = 'none';
          checkIcon.style.display = 'block';
          btn.style.color = 'var(--accent-secondary)';
          btn.classList.add('success');
          
          setTimeout(() => {
            copyIcon.style.display = 'block';
            checkIcon.style.display = 'none';
            btn.style.color = 'var(--text-muted)';
            btn.classList.remove('success');
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });


  // ==========================================
  // 11. Contact Form Validation & Email Draft Submit
  // ==========================================
  const contactForm = document.getElementById('portfolio-contact-form');
  const formFeedback = document.getElementById('form-feedback-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      
      formFeedback.textContent = '';
      formFeedback.className = 'form-feedback';

      if (!nameInput.value.trim() || !emailInput.value.trim() || !subjectInput.value.trim() || !messageInput.value.trim()) {
        formFeedback.textContent = 'Please fill out all fields.';
        formFeedback.classList.add('error');
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        formFeedback.textContent = 'Please provide a valid email address.';
        formFeedback.classList.add('error');
        return;
      }

      const subject = encodeURIComponent(subjectInput.value.trim());
      const body = encodeURIComponent(
        `Name: ${nameInput.value.trim()}\n` +
        `Email: ${emailInput.value.trim()}\n\n` +
        `${messageInput.value.trim()}`
      );

      window.location.href = `mailto:fahim.haque36@gmail.com?subject=${subject}&body=${body}`;
      formFeedback.textContent = 'Your email app should open with the message ready to send.';
      formFeedback.classList.add('success');
    });
  }

});
