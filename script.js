// F8BET Customer Service Center - Interactive Features
// Tác giả: AI Assistant
// Ngày tạo: 2024

class F8BETCustomerService {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.setupScrollEffects();
        this.setupServiceCards();
        this.setupMobileMenu();
        this.setupLazyLoading();
        this.setupAccessibility();
        this.setupBackgroundAnimation();
    }

    // Thiết lập event listeners
    setupEventListeners() {
        // Button click effects
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', this.handleButtonClick.bind(this));
            button.addEventListener('mouseenter', this.handleButtonHover.bind(this));
            button.addEventListener('mouseleave', this.handleButtonLeave.bind(this));
        });

        // Service card interactions
        document.querySelectorAll('.card-hover').forEach(card => {
            card.addEventListener('mouseenter', this.handleCardHover.bind(this));
            card.addEventListener('mouseleave', this.handleCardLeave.bind(this));
            card.addEventListener('click', this.handleCardClick.bind(this));
        });

        // Service item interactions
        document.querySelectorAll('.service-item').forEach(item => {
            item.addEventListener('click', this.handleServiceClick.bind(this));
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', this.handleSmoothScroll.bind(this));
        });

        // Window resize handler
        window.addEventListener('resize', this.handleResize.bind(this));
        
        // Scroll handler
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    // Xử lý click button
    handleButtonClick(event) {
        const button = event.currentTarget;
        
        // Thêm hiệu ứng ripple
        this.createRippleEffect(button, event);
        
        // Scale animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);

        // Log action (có thể thay bằng analytics)
        console.log(`Button clicked: ${button.textContent.trim()}`);
    }

    // Xử lý hover button
    handleButtonHover(event) {
        const button = event.currentTarget;
        button.style.transform = 'translateY(-2px)';
    }

    // Xử lý leave button
    handleButtonLeave(event) {
        const button = event.currentTarget;
        button.style.transform = 'translateY(0)';
    }

    // Xử lý hover card
    handleCardHover(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(-5px) scale(1.02)';
        card.style.boxShadow = '0px 12px 30px 0px rgba(40, 200, 60, 0.25)';
    }

    // Xử lý leave card
    handleCardLeave(event) {
        const card = event.currentTarget;
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0px 4px 10px 0px rgba(40, 200, 60, 0.28)';
    }

    // Xử lý click card
    handleCardClick(event) {
        const card = event.currentTarget;
        const serviceName = card.querySelector('button')?.textContent || 'Service';
        
        // Hiệu ứng click
        this.createPulseEffect(card);
        
        // Log service click
        console.log(`Service clicked: ${serviceName}`);
        
        // Có thể thêm navigation hoặc modal ở đây
        this.showServiceModal(serviceName);
    }

    // Xử lý click service item
    handleServiceClick(event) {
        const item = event.currentTarget;
        const serviceName = item.querySelector('.service-item-label')?.textContent || 'Service';
        
        // Hiệu ứng click
        this.createPulseEffect(item);
        
        // Log service click
        console.log(`Service item clicked: ${serviceName}`);
        
        // Có thể thêm navigation hoặc modal ở đây
        this.showServiceModal(serviceName);
    }

    // Tạo hiệu ứng ripple
    createRippleEffect(element, event) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Tạo hiệu ứng pulse
    createPulseEffect(element) {
        element.style.animation = 'pulse 0.3s ease-in-out';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }

    // Hiển thị modal dịch vụ
    showServiceModal(serviceName) {
        // Tạo modal đơn giản
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg p-8 max-w-md mx-4">
                <h3 class="text-xl font-bold text-green-600 mb-4">${serviceName}</h3>
                <p class="text-gray-600 mb-6">Dịch vụ ${serviceName} đang được phát triển. Vui lòng liên hệ hotline để được hỗ trợ.</p>
                <div class="flex justify-end space-x-4">
                    <button class="px-4 py-2 text-gray-500 hover:text-gray-700" onclick="this.closest('.fixed').remove()">
                        Đóng
                    </button>
                    <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onclick="this.closest('.fixed').remove()">
                        Liên hệ
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Đóng modal khi click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Xử lý smooth scroll
    handleSmoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Xử lý resize window
    handleResize() {
        // Cập nhật layout khi resize
        this.updateLayout();
    }

    // Xử lý scroll
    handleScroll() {
        // Parallax effect cho background
        this.updateParallax();
        
        // Fade in elements khi scroll
        this.handleScrollAnimations();
    }

    // Khởi tạo animations
    initializeAnimations() {
        // Thêm CSS animations
        this.addAnimationStyles();
        
        // Khởi tạo floating elements
        this.initFloatingElements();
        
        // Khởi tạo loading animations
        this.initLoadingAnimations();
    }

    // Thêm CSS animations
    addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideInLeft {
                from {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(30px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .animate-fade-in-up {
                animation: fadeInUp 0.6s ease-out;
            }
            
            .animate-slide-in-left {
                animation: slideInLeft 0.6s ease-out;
            }
            
            .animate-slide-in-right {
                animation: slideInRight 0.6s ease-out;
            }
        `;
        document.head.appendChild(style);
    }

    // Khởi tạo floating elements
    initFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
            element.classList.add('floating');
        });
    }

    // Khởi tạo loading animations
    initLoadingAnimations() {
        // Thêm loading class cho images
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.classList.add('loading');
            img.addEventListener('load', () => {
                img.classList.remove('loading');
            });
        });
    }

    // Thiết lập scroll effects
    setupScrollEffects() {
        // Intersection Observer cho scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in-up');
                }
            });
        }, observerOptions);

        // Observe các elements cần animation
        document.querySelectorAll('.card-hover, .service-item').forEach(el => {
            observer.observe(el);
        });
    }

    // Thiết lập service cards
    setupServiceCards() {
        // Thêm tooltip cho service cards
        document.querySelectorAll('.service-card').forEach(card => {
            const button = card.querySelector('button');
            if (button) {
                this.addTooltip(button, button.textContent);
            }
        });
    }

    // Thêm tooltip
    addTooltip(element, text) {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-900 text-white px-2 py-1 rounded text-sm z-50';
            tooltip.textContent = text;
            tooltip.style.top = `${e.pageY - 40}px`;
            tooltip.style.left = `${e.pageX + 10}px`;
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    }

    // Thiết lập mobile menu
    setupMobileMenu() {
        // Thêm mobile menu toggle nếu cần
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.toggle('hidden');
                }
            });
        }
    }

    // Thiết lập lazy loading
    setupLazyLoading() {
        // Lazy loading cho images
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Thiết lập accessibility
    setupAccessibility() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                // Đóng modal nếu có
                const modal = document.querySelector('.fixed');
                if (modal) {
                    modal.remove();
                }
            }
        });

        // Focus management
        document.querySelectorAll('button, a, .card-hover').forEach(element => {
            element.setAttribute('tabindex', '0');
        });
    }

    // Thiết lập background animation
    setupBackgroundAnimation() {
        this.backgroundSlide = document.querySelector('.mockup-background-container .background-slide');
        this.animationInterval = null;
        this.currentAnimation = 'active';
        
        console.log('Background slide found:', this.backgroundSlide ? 'Yes' : 'No');
        
        // Chỉ chạy animation nếu có background slide
        if (this.backgroundSlide) {
            console.log('Starting background animation setup...');
            
            // Preload background image
            this.preloadBackgroundImage();
            
            // Bắt đầu animation sau khi preload
            setTimeout(() => {
                this.startBackgroundAnimation();
            }, 1000);
            
            // Tạm dừng animation khi tab không active
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    this.pauseBackgroundAnimation();
                } else {
                    this.resumeBackgroundAnimation();
                }
            });
        } else {
            console.log('No background slide found!');
        }
    }

    // Preload background image
    preloadBackgroundImage() {
        const imageUrl = './assets/img/feature/backgroupf1.png';
        
        const img = new Image();
        img.src = imageUrl;
        
        console.log('Background image preloaded');
    }

    // Bắt đầu background animation
    startBackgroundAnimation() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
        }
        
        console.log('Background animation started!');
        
        // Chuyển đổi animation mỗi 8 giây
        this.animationInterval = setInterval(() => {
            this.changeAnimation();
        }, 8000);
    }

    // Chuyển đổi animation
    changeAnimation() {
        if (!this.backgroundSlide) return;
        
        // Xóa tất cả animation classes
        this.backgroundSlide.classList.remove('active', 'zoom', 'opacity', 'continuous-rotate');
        
        // Chuyển đổi giữa các animation
        const animations = ['active', 'continuous-rotate', 'zoom', 'opacity'];
        const currentIndex = animations.indexOf(this.currentAnimation);
        const nextIndex = (currentIndex + 1) % animations.length;
        this.currentAnimation = animations[nextIndex];
        
        // Thêm animation mới
        this.backgroundSlide.classList.add(this.currentAnimation);
        
        // Log để debug
        console.log(`Animation changed to: ${this.currentAnimation}`);
    }

    // Tạm dừng background animation
    pauseBackgroundAnimation() {
        if (this.animationInterval) {
            clearInterval(this.animationInterval);
            this.animationInterval = null;
        }
        
        // Tạm dừng animation CSS
        if (this.backgroundSlide) {
            this.backgroundSlide.style.animationPlayState = 'paused';
        }
    }

    // Tiếp tục background animation
    resumeBackgroundAnimation() {
        if (!this.animationInterval) {
            this.startBackgroundAnimation();
        }
        
        // Tiếp tục animation CSS
        if (this.backgroundSlide) {
            this.backgroundSlide.style.animationPlayState = 'running';
        }
    }

    // Cập nhật layout
    updateLayout() {
        // Cập nhật responsive layout
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        // Thêm/remove classes dựa trên screen size
        document.body.classList.toggle('mobile', isMobile);
        document.body.classList.toggle('tablet', isTablet);
    }

    // Cập nhật parallax
    updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Xử lý scroll animations
    handleScrollAnimations() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Fade in elements khi scroll
        document.querySelectorAll('.fade-in-on-scroll').forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
                element.classList.add('animate-fade-in-up');
            }
        });
    }

    // Utility methods
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Khởi tạo Footer Slider với Slick Slider
function initializeFooterSlider() {
    const checkSlickLoaded = setInterval(() => {
        if (window.jQuery && window.jQuery.fn.slick) {
            clearInterval(checkSlickLoaded);
            setupFooterLayout();
            window.addEventListener('resize', debounceFooterLayout);
        }
    }, 100);

    setTimeout(() => {
        if (!window.jQuery || !window.jQuery.fn.slick) {
            console.error('Không thể load Slick Slider sau 10 giây');
        }
    }, 10000);
}

function debounceFooterLayout() {
    clearTimeout(debounceFooterLayout._t);
    debounceFooterLayout._t = setTimeout(setupFooterLayout, 200);
}

function setupFooterLayout() {
    const $ = window.jQuery;
    if (!$ || !$.fn.slick) return;

    const $slider = $('.footer-slider');
    if (!$slider.length) return;

    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }
        $slider.addClass('footer-flex');
        setupFooterSlideClicks();
        return;
    }

    $slider.removeClass('footer-flex');

    if (!$slider.hasClass('slick-initialized')) {
        $slider.slick({
            dots: false,
            arrows: true,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            cssEase: 'ease-in-out',
            pauseOnHover: true,
            pauseOnFocus: true,
            swipeToSlide: true,
            touchMove: true,
            touchThreshold: 30,
            prevArrow: '<button type="button" class="slick-prev custom-arrow custom-prev"><img src="./assets/img/footer/left.png" alt="Previous" /></button>',
            nextArrow: '<button type="button" class="slick-next custom-arrow custom-next"><img src="./assets/img/footer/right.png" alt="Next" /></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2500
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: true,
                        autoplaySpeed: 2500
                    }
                }
            ]
        });
        setupFooterSlideClicks();
    } else {
        $slider.slick('setPosition');
    }
}

    // Khởi tạo khi DOM loaded
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM loaded, initializing F8BET service...');
        
        // Debug: Kiểm tra background slides
        const debugSlides = document.querySelectorAll('.background-slide');
        console.log('Debug - Background slides found:', debugSlides.length);
        debugSlides.forEach((slide, index) => {
            console.log(`Slide ${index}:`, slide.className);
        });
        
        new F8BETCustomerService();
        
        // Khởi tạo Footer Slider với Slick
        initializeFooterSlider();
        
        // Test button functionality
        const testButton = document.getElementById('testAnimation');
        if (testButton) {
            testButton.addEventListener('click', () => {
                console.log('Test button clicked!');
                const bg1 = document.getElementById('bg1');
                
                if (!bg1) return;
                
                // Xóa tất cả animation classes
                bg1.classList.remove('active', 'zoom', 'opacity', 'continuous-rotate');
                
                // Test manual animation với các hiệu ứng mới
                bg1.classList.add('active');
                
                setTimeout(() => {
                    bg1.classList.remove('active');
                    bg1.classList.add('continuous-rotate');
                }, 2000);
                
                setTimeout(() => {
                    bg1.classList.remove('continuous-rotate');
                    bg1.classList.add('zoom');
                }, 4000);
                
                setTimeout(() => {
                    bg1.classList.remove('zoom');
                    bg1.classList.add('opacity');
                }, 6000);
                
                setTimeout(() => {
                    bg1.classList.remove('opacity');
                    bg1.classList.add('active');
                }, 8000);
            });
        }
        
        // Thêm loading screen
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'fixed inset-0 bg-[#F0FDF0] flex items-center justify-center z-50';
        loadingScreen.innerHTML = `
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-green-600 font-semibold">Đang tải...</p>
            </div>
        `;
        
        document.body.appendChild(loadingScreen);
        
        // Ẩn loading screen sau 1 giây
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 300);
        }, 1000);
    });

// Hàm xử lý click cho footer (ủy thác vì Slick clone slide khi infinite — không thể gán data-link theo index)
function setupFooterSlideClicks() {
    const $ = window.jQuery;
    if (!$ || !$.fn.slick) {
        return;
    }

    const $slider = $('.footer-slider');
    if (!$slider.length) {
        return;
    }

    $slider.off('.footerLink');

    const slideSelector = $slider.hasClass('footer-flex') ? '.footer-slide' : '.slick-slide';

    $slider.on('pointerdown.footerLink mousedown.footerLink touchstart.footerLink', slideSelector, function (e) {
        if (e.type === 'mousedown' && e.button !== 0) {
            return;
        }
        const t = e.originalEvent;
        if (!t) {
            return;
        }
        const x = t.touches && t.touches[0] ? t.touches[0].clientX : t.clientX;
        const y = t.touches && t.touches[0] ? t.touches[0].clientY : t.clientY;
        this.setAttribute('data-footer-press-x', String(x));
        this.setAttribute('data-footer-press-y', String(y));
    });
    $slider.on('click.footerLink', slideSelector, function (e) {
        const el = e.currentTarget;
        const px = el.getAttribute('data-footer-press-x');
        const py = el.getAttribute('data-footer-press-y');
        el.removeAttribute('data-footer-press-x');
        el.removeAttribute('data-footer-press-y');
        if (px != null && py != null) {
            const d = Math.max(
                Math.abs(e.clientX - parseInt(px, 10)),
                Math.abs(e.clientY - parseInt(py, 10))
            );
            if (d > 14) {
                return;
            }
        }
        const $inner = $(el).hasClass('footer-slide') ? $(el) : $(el).find('.footer-slide').first();
        if (!$inner.length) {
            return;
        }
        const link = $inner.attr('data-link');
        const title = $inner.attr('data-title') || '';
        if (!link) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        el.style.transform = 'scale(0.95)';
        setTimeout(() => {
            el.style.transform = '';
        }, 150);
        window.open(link, '_blank', 'noopener,noreferrer');
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'footer_slide',
                'event_label': title,
                'link_url': link
            });
        }
    });
}

// Export cho sử dụng global
window.F8BETCustomerService = F8BETCustomerService;

function downloadApp() {
    const APP_APK_URL = 'https://images.6928517.com/wsd-images-prod/yg88vndkf7/merchant_resource/android/yg88vndkf7_2.4.87_20260715102120.apk';
    const APP_IOS_URL = 'https://images.6928517.com/wsd-images-prod/yg88vndkf7/merchant_resource/mobileconfig/yg88vndkf7_2.4.3_20260715102053.mobileconfig';
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    window.location.href = isIOS ? APP_IOS_URL : APP_APK_URL;
}

window.downloadApp = downloadApp;
