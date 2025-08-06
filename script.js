// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-btn[href^="#"]');
    
    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Removed active state functionality - buttons only change on hover
    
    // Special button hover effect is now handled by CSS only
    
    // Mobile menu toggle (if needed in future)
    function initMobileMenu() {
        const navbar = document.querySelector('.navbar');
        const navButtons = document.querySelector('.nav-buttons');
        
        // Add mobile menu functionality if needed
        if (window.innerWidth <= 768) {
            // Mobile menu logic can be added here
        }
    }
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Reinitialize on window resize
    window.addEventListener('resize', initMobileMenu);
    
    // Handle special button positioning on mobile
    function checkSpecialButtonPosition() {
        const specialBtn = document.querySelector('.special-btn');
        const navButtons = document.querySelector('.nav-buttons');
        const navLogo = document.querySelector('.nav-logo');
        
        if (specialBtn && navButtons && navLogo) {
            const buttons = navButtons.querySelectorAll('.nav-btn:not(.special-btn)');
            const containerWidth = navButtons.offsetWidth;
            let totalWidth = 0;
            
            // Calculate total width of regular buttons
            buttons.forEach(btn => {
                totalWidth += btn.offsetWidth + 6; // 6px is the gap
            });
            
            // If regular buttons take more than 80% of container width, move special button to logo level
            if (totalWidth > containerWidth * 0.8) {
                specialBtn.style.position = 'absolute';
                specialBtn.style.right = '20px';
                specialBtn.style.top = '15px';
                specialBtn.style.zIndex = '1001';
                
                // Ensure logo stays on the left
                navLogo.style.position = 'absolute';
                navLogo.style.left = '20px';
                navLogo.style.top = '15px';
                navLogo.style.zIndex = '1001';
                
                // Add top margin to nav-buttons to avoid overlap
                navButtons.style.marginTop = '60px';
            } else {
                specialBtn.style.position = 'static';
                specialBtn.style.right = 'auto';
                specialBtn.style.top = 'auto';
                specialBtn.style.zIndex = 'auto';
                
                navLogo.style.position = 'static';
                navLogo.style.left = 'auto';
                navLogo.style.top = 'auto';
                navLogo.style.zIndex = 'auto';
                
                navButtons.style.marginTop = '0px';
            }
        } else if (specialBtn) {
            specialBtn.style.position = 'static';
            specialBtn.style.right = 'auto';
            specialBtn.style.top = 'auto';
            specialBtn.style.zIndex = 'auto';
            
            if (navButtons) {
                navButtons.style.marginTop = '0px';
            }
        }
    }
    
    // Check on load and resize
    window.addEventListener('load', checkSpecialButtonPosition);
    window.addEventListener('resize', checkSpecialButtonPosition);
});

// Add loading animation for sections
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize animations when page loads
window.addEventListener('load', animateOnScroll); 