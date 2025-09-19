// ===== БЛОК ФОНА (независимый модуль) =====
const backgroundBlock = {
    element: document.getElementById('backgroundBlock'),
    init() { 
        console.log('Блок фона инициализирован (независимый)'); 
    }
};

// ===== КОНТЕЙНЕР СЕТКИ (независимый модуль) =====
const gridContainer = {
    element: document.getElementById('gridContainer'),
    init() { 
        console.log('Контейнер сетки инициализирован (независимый)'); 
    }
};

// ===== БЛОК БЕСШОВНОЙ СТРОКИ ФОТОГРАФИЙ (независимый модуль) =====
const photosStripBlock = {
    element: document.getElementById('photosStripBlock'),
    slider: document.getElementById('photosSlider'),
    overlay: document.getElementById('photosOverlay'),
    photos: [
        'https://i.ibb.co/v4WLGd6L/1a14c854-8619-4a21-84ae-a5a0b1b552e9.png',
        'https://i.ibb.co/LhJHN6sm/2c3d2c99-9c6c-423e-b91b-886b68cc6c59.png',
        'https://i.ibb.co/vCnTG40L/4ebe8330-73b8-4404-afe1-ca9399d4fa46.png',
        'https://i.ibb.co/DDZbFMHm/6f94a2a7-3219-4115-902b-e78f333c3bd2.png',
        'https://i.ibb.co/LdJ455vG/84e23754-6449-4d40-b55a-2bed7ff99101.png',
        'https://i.ibb.co/jk4trnxn/0097b162-8e0e-4b57-9e5a-546f7bc00368.png',
        'https://i.ibb.co/rKGRR2Nc/132f4a66-4a0d-40cc-b04c-363824a9cc09.png',
        'https://i.ibb.co/9kJMFmJm/306a0070-ef53-4b92-b22a-a491e9336777.png',
        'https://i.ibb.co/gMFMbZbk/0360bcfa-3f4e-4a50-8126-2bb73818864f.png',
        'https://i.ibb.co/bj0v8Xm2/1000-F-268225711-8e-SYAQWXKKw-WV6-J3s-MEg-Gnj3-O654d1-Lb.jpg',
        'https://i.ibb.co/Nns26Vyq/1947bdad-2bce-4ade-866f-88c9a2cb4763.png',
        'https://i.ibb.co/ccbX5hV6/4131cc47-cbdd-48ca-9839-fb4bd7290cc8.png',
        'https://i.ibb.co/bjbp1Wp9/abcc9b16-9996-4324-b0e9-b82fb527c403.png',
        'https://i.ibb.co/hxyG77tT/c52b75ff-d70a-420a-9ad9-b74e9d3695d9.png',
        'https://i.ibb.co/bMqNCLVD/d9b07336-1604-4612-bb84-853bfeb90bfe.png',
        'https://i.ibb.co/21mBTsm4/d95bb88c-9976-43f8-9f26-49096c46f42e.png',
        'https://i.ibb.co/7d13GBtM/f611a3df-792f-40e3-bdfa-b5f03c141b84.png',
        'https://i.ibb.co/TBnHNhMC/f885324d-b24f-4c13-a43b-4336db7e2786.png'
    ],
    currentOffset: 0,
    photoWidth: 400,
    photoMargin: 20,
    isAnimating: true,
    totalWidth: 0,
    scrollSpeed: 1,

    init() {
        if (this.element && this.slider) {
            this.createSeamlessPhotos();
            this.startInfiniteScroll();
        }
        console.log('Блок бесшовной строки инициализирован (независимый)');
    },

    createSeamlessPhotos() {
        this.photos.forEach((photoSrc, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            
            const img = document.createElement('img');
            img.src = photoSrc;
            img.alt = `Фото проекта ${index + 1}`;
            
            img.onerror = () => {
                console.log(`Ошибка загрузки фото: ${photoSrc}`);
                img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="280"%3E%3Crect width="100%25" height="100%25" fill="%23222" rx="12"%3E%3C/rect%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23888" font-size="16"%3EФото недоступно%3C/text%3E%3C/svg%3E';
            };
            
            photoItem.appendChild(img);
            this.slider.appendChild(photoItem);
        });
        
        this.totalWidth = (this.photoWidth + this.photoMargin) * this.photos.length;
        console.log(`Создано ${this.photos.length} изображений для бесшовной ленты`);
        console.log(`Общая ширина набора: ${this.totalWidth}px`);
    },

    startInfiniteScroll() {
        const animate = () => {
            if (!this.isAnimating) return;
            
            this.currentOffset -= this.scrollSpeed;
            
            if (Math.abs(this.currentOffset) >= this.totalWidth) {
                this.currentOffset = 0;
            }
            
            this.slider.style.transform = `translateX(${this.currentOffset}px)`;
            requestAnimationFrame(animate);
        };
        
        animate();
    },

    changeOverlayOpacity(opacity) {
        if (this.overlay) {
            this.overlay.style.background = `rgba(0, 0, 0, ${opacity})`;
        }
    },

    pauseAnimation() {
        this.isAnimating = false;
        console.log('Анимация приостановлена');
    },

    resumeAnimation() {
        if (!this.isAnimating) {
            this.isAnimating = true;
            this.startInfiniteScroll();
            console.log('Анимация возобновлена');
        }
    },

    changeSpeed(speedMultiplier = 1) {
        this.scrollSpeed = 1 * speedMultiplier;
        console.log(`Скорость изменена на: ${this.scrollSpeed}`);
    }
};

// ===== БЛОК ЛОГОТИПА (независимый модуль) =====
const logoBlock = { 
    element: document.getElementById('logoBlock'), 
    init() { 
        console.log('Блок логотипа инициализирован (независимый)'); 
    } 
};

// ===== БЛОК НАЗВАНИЯ КОМПАНИИ (независимый модуль) =====
const companyNameBlock = { 
    element: document.getElementById('companyNameBlock'), 
    init() { 
        console.log('Блок названия компании инициализирован (независимый)'); 
    } 
};

// ===== БЛОК ТЕЛЕФОНА (независимый модуль) =====
const phoneBlock = { 
    element: document.getElementById('phoneBlock'), 
    init() { 
        if (this.element) { 
            const link = this.element.querySelector('a'); 
            if (link) {
                link.addEventListener('click', (e) => {
                    console.log('Клик по телефону:', e.target.textContent);
                });
            }
        } 
        console.log('Блок телефона инициализирован (независимый)'); 
    } 
};

// ===== ДЕСКТОПНАЯ НАВИГАЦИЯ (независимый модуль - только для PC) =====
const desktopNavigationBlock = {
    element: document.getElementById('desktopNavigationBlock'),
    
    init() {
        if (this.element) {
            this.setActivePageFromURL();
            
            const links = this.element.querySelectorAll('.desktop-menu-link');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    console.log('Десктопная навигация - переход на:', e.target.textContent, '→', e.target.href);
                });
            });
        }
        console.log('Десктопная навигация инициализирована (независимый модуль)');
    },
    
    setActivePageFromURL() {
        const currentPage = window.location.pathname.split('/').pop() || 'rkpanel_tester.html';
        const allLinks = this.element.querySelectorAll('.desktop-menu-link');
        
        allLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('data-page') || link.getAttribute('href');
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'rkpanel_tester.html') ||
                (currentPage === 'index.html' && linkPage === 'rkpanel_tester.html')) {
                link.classList.add('active');
                console.log(`Десктопная навигация - активная кнопка: ${link.textContent}`);
            }
        });
    }
};

// ===== МОБИЛЬНАЯ НАВИГАЦИЯ (независимый модуль - только для мобилки) =====
const mobileNavigationBlock = {
    element: document.getElementById('mobileNavigationBlock'),
    toggleButton: document.getElementById('mobileMenuToggle'),
    dropdown: document.getElementById('mobileMenuDropdown'),
    isOpen: false,
    
    init() {
        if (this.element && this.toggleButton && this.dropdown) {
            this.setupEventListeners();
            this.setActivePageFromURL();
        }
        console.log('Мобильная навигация инициализирована (независимый модуль)');
    },
    
    setupEventListeners() {
        this.toggleButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });
        
        const links = this.element.querySelectorAll('.mobile-menu-link');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                console.log('Мобильная навигация - переход на:', e.target.textContent, '→', e.target.href);
                this.closeMenu();
            });
        });
        
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.element.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
    },
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    },
    
    openMenu() {
        this.toggleButton.classList.add('active');
        this.dropdown.classList.add('active');
        this.isOpen = true;
        console.log('Мобильное меню открыто');
    },
    
    closeMenu() {
        this.toggleButton.classList.remove('active');
        this.dropdown.classList.remove('active');
        this.isOpen = false;
        console.log('Мобильное меню закрыто');
    },
    
    setActivePageFromURL() {
        const currentPage = window.location.pathname.split('/').pop() || 'rkpanel_tester.html';
        const allLinks = this.element.querySelectorAll('.mobile-menu-link');
        
        allLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('data-page') || link.getAttribute('href');
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'rkpanel_tester.html') ||
                (currentPage === 'index.html' && linkPage === 'rkpanel_tester.html')) {
                link.classList.add('active');
                console.log(`Мобильная навигация - активная кнопка: ${link.textContent}`);
            }
        });
    }
};

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ НЕЗАВИСИМЫХ МОДУЛЕЙ =====
document.addEventListener('DOMContentLoaded', function() {
    backgroundBlock.init();
    gridContainer.init();
    photosStripBlock.init();
    logoBlock.init();
    companyNameBlock.init();
    phoneBlock.init();
    desktopNavigationBlock.init();
    mobileNavigationBlock.init();
    
    console.log('🚀 Все независимые модули шапки инициализированы');
    console.log('📱 Мобильная адаптация: гамбургер-меню + одна строка контента');
    console.log('🖥️ Десктопная версия: полноценная навигация');
});

// ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ УПРАВЛЕНИЯ =====
function changeOverlayOpacity(opacity) { 
    photosStripBlock.changeOverlayOpacity(opacity); 
}

function pausePhotos() {
    photosStripBlock.pauseAnimation();
}

function resumePhotos() {
    photosStripBlock.resumeAnimation();
}

function changePhotosSpeed(speed) {
    photosStripBlock.changeSpeed(speed);
}

function toggleMobileMenu() {
    mobileNavigationBlock.toggleMenu();
}

function getCurrentActivePage() {
    const desktopActive = document.querySelector('.desktop-menu-link.active');
    const mobileActive = document.querySelector('.mobile-menu-link.active');
    return (desktopActive || mobileActive)?.textContent || 'Не определена';
}

function getPhotosInfo() {
    return {
        total: photosStripBlock.photos.length,
        unique: photosStripBlock.photos.length,
        duplicated: photosStripBlock.photos.length,
        totalWidth: photosStripBlock.totalWidth
    };
}
