// One Click Multi-Tools Website - Common JavaScript Functions

// Header HTML Template (Copied to match provided design)
const headerHTML = `
<header>
    <div class="container">
        <div class="header-content">
            <a href="index.html" class="logo" id="logoLink">
                One &nbsp; <i class="fas fa-tools"></i> Click
            </a>

            <button class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </button>

            <nav id="mainNav">
                <ul>
                    <li><a href="index.html" id="homeLink">Home</a></li>
                    <li><a href="#image-tools">Image Tools</a></li>
                    <li><a href="about.html">About us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <div class="mobile-contact">
                </div>
            </nav>

            <div class="contact-info">
            </div>
        </div>
    </div>
 </header>
`;

// Footer HTML Template (Copied to match provided design)
const footerHTML = `
<footer>
  <div class="container">
    <div class="footer-content">
      <div>
        <a href="index.html" class="footer-logo" id="footerLogoLink">
           One &nbsp; <i class="fas fa-tools"></i>&nbsp; Click
        </a>
        <p class="footer-tagline">Simplifying your digital life.</p>
        <div class="footer-contact">
          <i class="fas fa-envelope"></i>
          <span><a href="https://mail.google.com/" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">oneclicktools6@gmail.com</a></span>
        </div>
      </div>

      <div>
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="index.html#image-tools">Tools</a></li>
        </ul>
      </div>

      <div>
        <h3 class="footer-heading">Legal</h3>
        <ul class="footer-links">
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Use</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 One Click Tool. All rights reserved.</p>
    </div>
  </div>
</footer>
`;

// Function to load header and footer
function loadCommonElements() {
    // Load header
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
    
    // Load footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = footerHTML;
    }
    
    // Initialize menus and assets
    initializeMobileMenu();
    ensureFontAwesome();
    adjustHeaderFooterLinks();
}

// Mobile menu functionality
function initializeMobileMenu() {
    // Support original template ids
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Support provided design ids
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        // Close on nav link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => mainNav.classList.remove('active'));
        });
    }
}

// Adjust links so they work from both the homepage and tools/* pages
function adjustHeaderFooterLinks() {
    const path = (window.location.pathname || '').replace(/\\/g, '/');
    const isInTools = path.includes('/tools/');
    const indexPath = isInTools ? '../index.html' : 'index.html';

    const logo = document.getElementById('logoLink');
    if (logo) logo.setAttribute('href', indexPath);
    const home = document.getElementById('homeLink');
    if (home) home.setAttribute('href', indexPath);
    const footerLogo = document.getElementById('footerLogoLink');
    if (footerLogo) footerLogo.setAttribute('href', indexPath);

    // Section anchors should route to homepage sections from subpages
    const sectionIds = ['image-tools','seo-tools','seo-tools-2','text-tools','developer-tools','calculators','converters','indian-tools','tools'];
    sectionIds.forEach(id => {
        document.querySelectorAll(`nav a[href="#${id}"]`).forEach(link => {
            link.setAttribute('href', `${indexPath}#${id}`);
        });
    });

    // Adjust top-level page links when inside tools/* so they navigate correctly
    if (isInTools) {
        const remap = new Map([
            ['about.html', '../about.html'],
            ['contact.html', '../contact.html'],
            ['privacy.html', '../privacy.html'],
            ['terms.html', '../terms.html'],
            ['index.html#image-tools', '../index.html#image-tools'],
            ['index.html', '../index.html'],
        ]);
        remap.forEach((to, from) => {
            document.querySelectorAll(`a[href="${from}"]`).forEach(a => a.setAttribute('href', to));
        });
    }
}

// Ensure Font Awesome is available (for header/footer icons)
function ensureFontAwesome() {
    const id = 'oneclick-fa';
    if (!document.getElementById(id)) {
        const link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(link);
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            filterTools(query);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.toLowerCase();
                filterTools(query);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.toLowerCase();
            filterTools(query);
        });
    }
}

// Filter tools based on search query
function filterTools(query) {
    const toolCards = document.querySelectorAll('.tool-card');
    const categoryTitles = document.querySelectorAll('.category-title');
    let visibleCategories = new Set();
    
    toolCards.forEach(card => {
        const title = card.querySelector('.tool-title').textContent.toLowerCase();
        const description = card.querySelector('.tool-description').textContent.toLowerCase();
        const category = card.closest('.category-section');
        
        if (query === '' || title.includes(query) || description.includes(query)) {
            card.style.display = 'block';
            if (category) {
                visibleCategories.add(category);
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide category sections based on visible tools
    document.querySelectorAll('.category-section').forEach(section => {
        const hasVisibleTools = Array.from(section.querySelectorAll('.tool-card')).some(card => 
            card.style.display !== 'none'
        );
        section.style.display = hasVisibleTools || query === '' ? 'block' : 'none';
    });
}

// Utility function to copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showNotification('Copied to clipboard!', 'success');
        }).catch(function() {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// Fallback copy function for older browsers
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('Copied to clipboard!', 'success');
    } catch (err) {
        showNotification('Failed to copy to clipboard', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Show notification function
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#007bff'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// File download utility
function downloadFile(content, filename, contentType = 'text/plain') {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Format file size utility
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate URL format
function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCommonElements();
    initializeSearch();
});

// Google Analytics (replace with your tracking ID)
function initializeAnalytics() {
    // Add your Google Analytics code here
    console.log('Analytics initialized');
}

// Ad loading function (placeholder for AdSense)
function loadAds() {
    // Add your AdSense code here
    console.log('Ads loaded');
}

// Initialize analytics and ads
window.addEventListener('load', function() {
    initializeAnalytics();
    loadAds();
});
