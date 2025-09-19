/* ===== МОДУЛЬ 1: КОНТЕЙНЕР (АВТОНОМНЫЙ) ===== */
const HeroContainer = {
    element: document.getElementById('heroContainer'),
    
    init() {
        console.log('✅ HeroContainer (АВТОНОМНЫЙ МОДУЛЬ) инициализирован');
        return this;
    },

    setHeight(height) {
        if (this.element) {
            this.element.style.height = height + 'px';
            console.log(`📐 Высота контейнера изменена на ${height}px`);
        }
    },

    setMaxWidth(maxWidth) {
        if (this.element) {
            this.element.style.maxWidth = maxWidth + 'px';
            console.log(`📏 Максимальная ширина изменена на ${maxWidth}px`);
        }
    }
};

/* ===== МОДУЛЬ 2: СЛАЙДЕР (АВТОНОМНЫЙ) ===== */
const BackgroundSlider = {
    element: document.getElementById('backgroundSlider'),
    container: document.getElementById('slidesContainer'),
    currentSlide: 0,
    slides: [],
    interval: null,
    
    images: [
        'https://s.iimg.su/s/15/gFtHgK1xPYVt0RM5vYGg3DBG5IZM63Tqa5NTsgYn.png',
        'https://rkpanel.ru/assets/Uploads/IMG_1086.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_7831.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_7238.JPG',
        'https://rkpanel.ru/assets/Uploads/15.jpg',
        'https://rkpanel.ru/assets/Uploads/Avtomojka-s-oknami.JPG',
        'https://rkpanel.ru/assets/Uploads/cherteg.jpg',
        'https://rkpanel.ru/assets/Uploads/IMG_7830.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_8136.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_1677.JPG',
        'https://rkpanel.ru/assets/Uploads/20191224_091457.jpg',
        'https://rkpanel.ru/assets/Uploads/IMG_7468.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_2562.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_1903.jpg',
        'https://rkpanel.ru/assets/Uploads/IMG_7148.JPG',
        'https://rkpanel.ru/assets/Uploads/IMG_7792.JPG'
    ],
    
    init() {
        if (this.container) {
            this.createSlides();
            this.startSlideshow();
            console.log(`✅ BackgroundSlider инициализирован - ${this.images.length} изображений`);
        }
        return this;
    },
    
    createSlides() {
        this.images.forEach((imageSrc, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide-item';
            slide.style.backgroundImage = `url("${imageSrc}")`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
            
            this.container.appendChild(slide);
            this.slides.push(slide);
        });
        
        this.updateSliderPosition();
    },
    
    updateSliderPosition() {
        if (this.container) {
            const translateX = -this.currentSlide * 100;
            this.container.style.transform = `translateX(${translateX}%)`;
        }
    },
    
    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.updateSliderPosition();
        console.log(`🔄 Перелистывание - слайд ${this.currentSlide + 1} из ${this.slides.length}`);
    },
    
    startSlideshow() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    },
    
    stopSlideshow() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
};

/* ===== МОДУЛЬ 3А: ГЛАВНЫЙ ЗАГОЛОВОК (АВТОНОМНЫЙ) ===== */
const HeroTitleMain = {
    element: document.getElementById('heroTitleMain'),
    textElement: null,
    
    init() {
        this.textElement = this.element?.querySelector('.hero-title-main-text');
        this.setupAnimations();
        console.log('✅ HeroTitleMain инициализирован');
        return this;
    },

    setupAnimations() {
        if (this.element) {
            this.element.style.opacity = '0';
            this.element.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                this.element.style.transition = 'all 0.8s ease';
                this.element.style.opacity = '1';
                this.element.style.transform = 'translateY(0)';
            }, 500);
        }
    }
};

/* ===== МОДУЛЬ 3Б: ПОДЗАГОЛОВОК (АВТОНОМНЫЙ) ===== */
const HeroTitleSub = {
    element: document.getElementById('heroTitleSub'),
    textElement: null,
    
    init() {
        this.textElement = this.element?.querySelector('.hero-title-sub-text');
        this.setupAnimations();
        console.log('✅ HeroTitleSub инициализирован');
        return this;
    },

    setupAnimations() {
        if (this.element) {
            this.element.style.opacity = '0';
            this.element.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                this.element.style.transition = 'all 0.8s ease';
                this.element.style.opacity = '1';
                this.element.style.transform = 'translateY(0)';
            }, 700);
        }
    }
};

/* ===== МОДУЛЬ 4: ПРЕИМУЩЕСТВА (БЕЗ ИКОНОК) ===== */
const AdvantagesBlock = {
    element: document.getElementById('advantagesBlock'),
    
    advantages: [
        {
            text: 'СЭНДВИЧ-ПАНЕЛИ НАПРЯМУЮ ОТ ПРОИЗВОДИТЕЛЯ'
        },
        {
            text: 'СРОК ИЗГОТОВЛЕНИЯ - 3 ДНЯ'
        },
        {
            text: 'ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ И СТРОИТЕЛЬСТВО ЗДАНИЙ ПОД КЛЮЧ'
        }
    ],
    
    init() {
        if (this.element) {
            this.createAdvantages();
            console.log('✅ AdvantagesBlock инициализирован');
        }
        return this;
    },
    
    createAdvantages() {
        this.advantages.forEach((advantage, index) => {
            const item = document.createElement('div');
            item.className = 'advantage-item';
            
            // СОЗДАЁМ ТОЛЬКО ТЕКСТ, БЕЗ ИКОНОК
            const text = document.createElement('span');
            text.className = 'advantage-text';
            text.textContent = advantage.text;
            
            item.appendChild(text);
            this.element.appendChild(item);
            
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 800 + (index * 200));
        });
    }
};

/* ===== МОДУЛЬ 5: КНОПКА (МНОГОРАЗОВОЕ НАЖАТИЕ) ===== */
const ActionButton = {
    element: document.getElementById('actionButton'),
    
    init() {
        if (this.element) {
            this.setupEventListeners();
            this.setupAnimations();
            console.log('✅ ActionButton инициализирован');
        }
        return this;
    },

    setupEventListeners() {
        if (this.element) {
            this.element.addEventListener('click', () => {
                openContactPopup();
                console.log('🔥 Кнопка нажата - открываем popup');
            });
            
            this.element.addEventListener('mouseenter', () => {
                this.element.style.transform = 'scale(1.05)';
                this.element.style.backgroundColor = '#e55a32';
            });
            
            this.element.addEventListener('mouseleave', () => {
                this.element.style.transform = 'scale(1)';
                this.element.style.backgroundColor = '#ff6b35';
            });

            this.element.addEventListener('mousedown', () => {
                this.element.style.transform = 'scale(0.95)';
                this.element.style.backgroundColor = '#d44a2b';
            });

            this.element.addEventListener('mouseup', () => {
                if (this.element.matches(':hover')) {
                    this.element.style.transform = 'scale(1.05)';
                    this.element.style.backgroundColor = '#e55a32';
                } else {
                    this.element.style.transform = 'scale(1)';
                    this.element.style.backgroundColor = '#ff6b35';
                }
            });
        }
    },

    setupAnimations() {
        if (this.element) {
            this.element.style.opacity = '0';
            this.element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                this.element.style.transition = 'all 0.3s ease';
                this.element.style.opacity = '1';
                this.element.style.transform = 'translateY(0)';
            }, 1200);
        }
    }
};

/* ===== МОДУЛЬ 6: ВСПЛЫВАЮЩЕЕ ОКНО (МНОГОРАЗОВОЕ) ===== */
const ContactPopup = {
    overlay: document.getElementById('contactPopup'),
    scrollPosition: 0,
    
    init() {
        console.log('✅ ContactPopup инициализирован');
        return this;
    },

    show() {
        if (this.overlay) {
            // СОХРАНЯЕМ ПОЗИЦИЮ СКРОЛЛА
            this.scrollPosition = window.pageYOffset;
            
            // БЛОКИРУЕМ СКРОЛЛ СТРАНИЦЫ
            document.body.style.position = 'fixed';
            document.body.style.top = `-${this.scrollPosition}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';
            
            // ПОКАЗЫВАЕМ POPUP
            this.overlay.classList.add('show');
            console.log('📱 Popup показан, скролл заблокирован');
        }
    },

    hide() {
        if (this.overlay) {
            // УБИРАЕМ POPUP
            this.overlay.classList.remove('show');
            
            // ВОЗВРАЩАЕМ СКРОЛЛ СТРАНИЦЫ
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';
            
            // ВОССТАНАВЛИВАЕМ ПОЗИЦИЮ СКРОЛЛА
            window.scrollTo(0, this.scrollPosition);
            
            console.log('❌ Popup скрыт, скролл разблокирован');
        }
    }
};

/* ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ ===== */
function openContactPopup() {
    ContactPopup.show();
}

function closeContactPopup() {
    ContactPopup.hide();
}

/* ===== EVENT LISTENERS ===== */
const contactPopupElement = document.getElementById('contactPopup');
if (contactPopupElement) {
    contactPopupElement.addEventListener('click', function(e) {
        if (e.target === this) {
            closeContactPopup();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactPopup();
    }
});

/* ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ МОДУЛЕЙ ===== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Начинаем инициализацию всех модулей...');
    
    try {
        const container = HeroContainer.init();
        const slider = BackgroundSlider.init();
        const titleMain = HeroTitleMain.init();
        const titleSub = HeroTitleSub.init();
        const advantages = AdvantagesBlock.init();
        const button = ActionButton.init();
        const popup = ContactPopup.init();
        
        console.log('🚀 ВСЕ МОДУЛИ ОРИГИНАЛА ИНИЦИАЛИЗИРОВАНЫ');
        console.log('🏢 КОМПАНИЯ: Группа компаний СТРОЙХОЛДИНГ');
        console.log('📸 ИЗОБРАЖЕНИЯ: 16 фото проектов');
        console.log('✨ ПРЕИМУЩЕСТВА: 3 пункта БЕЗ ИКОНОК');
        console.log('📱 POPUP: Улучшенное управление скроллом');
        console.log('⏱️ АВТОПРОКРУТКА: 5 секунд');
        
        window.SliderModules = {
            Container: container,
            Slider: slider,
            TitleMain: titleMain,
            TitleSub: titleSub,
            Advantages: advantages,
            Button: button,
            Popup: popup
        };

        console.log('🎛️ Все модули доступны через window.SliderModules');
        
    } catch (error) {
        console.error('❌ Ошибка при инициализации модулей:', error);
    }
});
