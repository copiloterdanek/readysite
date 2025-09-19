/* ===== МОДУЛЬ 1: КОНТЕЙНЕР (АВТОНОМНЫЙ) ===== */
const HeroContainer1 = {
    element: document.getElementById('heroContainer1'),
    
    init() {
        console.log('✅ HeroContainer1 (МЕТАЛЛОКОНСТРУКЦИИ ПРОИЗВОДСТВО В КАРЕЛИИ) инициализирован');
        return this;
    },

    setHeight(height) {
        if (this.element) {
            this.element.style.height = height + 'px';
            console.log(`📐 Высота контейнера металлоконструкций: ${height}px`);
        }
    },

    setMaxWidth(maxWidth) {
        if (this.element) {
            this.element.style.maxWidth = maxWidth + 'px';
            console.log(`📏 Максимальная ширина металлоконструкций: ${maxWidth}px`);
        }
    }
};

/* ===== МОДУЛЬ 2: СЛАЙДЕР МЕТАЛЛОКОНСТРУКЦИЙ (АВТОНОМНЫЙ) ===== */
const BackgroundSlider1 = {
    element: document.getElementById('backgroundSlider1'),
    container: document.getElementById('slidesContainer1'),
    currentSlide: 0,
    slides: [],
    interval: null,
    
    images: [
        'https://i.ibb.co/60NfxRCs/cache-2475882079.jpg',
        'https://i.ibb.co/gF7bg06b/02-2665e34-e6852ed2247026c0ced911afe1e749d0.jpg',
        'https://i.ibb.co/wZd5dCSn/metallokonstrukcii-na-zakaz.jpg',
        'https://i.ibb.co/V0Fz0dhd/advantages-of-building-a-metal-building-ganneston-construction.jpg'
    ],
    
    init() {
        if (this.container) {
            this.createSlides();
            this.startSlideshow();
            console.log(`✅ BackgroundSlider1 инициализирован - ${this.images.length} фото металлоконструкций`);
        }
        return this;
    },
    
    createSlides() {
        this.images.forEach((imageSrc) => {
            const slide = document.createElement('div');
            slide.className = 'slide-item1';
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
        console.log(`🔄 Металлоконструкции слайд ${this.currentSlide + 1} из ${this.slides.length}`);
    },
    
    changeSpeed(intervalMs) {
        this.stopSlideshow();
        this.interval = setInterval(() => {
            this.nextSlide();
        }, intervalMs);
        console.log(`⚡ Скорость слайдера металлоконструкций изменена на ${intervalMs}ms`);
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
const HeroTitleMain1 = {
    element: document.getElementById('heroTitleMain1'),
    textElement: null,
    
    init() {
        this.textElement = this.element?.querySelector('.hero-title-main-text1');
        this.setupAnimations();
        console.log('✅ HeroTitleMain1 (МЕТАЛЛОКОНСТРУКЦИИ) инициализирован');
        return this;
    },

    setText(text) {
        if (this.textElement) {
            this.textElement.textContent = text;
            console.log(`📝 Заголовок металлоконструкций: "${text}"`);
        }
    },

    setPosition(top, left = 0) {
        if (this.element) {
            this.element.style.top = top + 'px';
            this.element.style.left = left + 'px';
            console.log(`📍 Позиция главного заголовка металлоконструкций: top=${top}px, left=${left}px`);
        }
    },

    setWidth(rightPadding) {
        if (this.element) {
            this.element.style.padding = `8px ${rightPadding}px 8px 45px`;
            console.log(`📏 Ширина главного заголовка металлоконструкций изменена: rightPadding=${rightPadding}px`);
        }
    },

    setFontSize(fontSize) {
        if (this.textElement) {
            this.textElement.style.fontSize = fontSize + 'px';
            console.log(`🔤 Размер шрифта главного заголовка металлоконструкций: ${fontSize}px`);
        }
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
const HeroTitleSub1 = {
    element: document.getElementById('heroTitleSub1'),
    textElement: null,
    
    init() {
        this.textElement = this.element?.querySelector('.hero-title-sub-text1');
        this.setupAnimations();
        console.log('✅ HeroTitleSub1 (ПРОИЗВОДСТВО В КАРЕЛИИ) инициализирован');
        return this;
    },

    setText(text) {
        if (this.textElement) {
            this.textElement.textContent = text;
            console.log(`📝 Текст подзаголовка металлоконструкций: "${text}"`);
        }
    },

    setPosition(top, left = 0) {
        if (this.element) {
            this.element.style.top = top + 'px';
            this.element.style.left = left + 'px';
            console.log(`📍 Позиция подзаголовка металлоконструкций: top=${top}px, left=${left}px`);
        }
    },

    setWidth(rightPadding) {
        if (this.element) {
            this.element.style.padding = `8px ${rightPadding}px 8px 45px`;
            console.log(`📏 Ширина подзаголовка металлоконструкций изменена: rightPadding=${rightPadding}px`);
        }
    },

    setFontSize(fontSize) {
        if (this.textElement) {
            this.textElement.style.fontSize = fontSize + 'px';
            console.log(`🔤 Размер шрифта подзаголовка металлоконструкций: ${fontSize}px`);
        }
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

/* ===== МОДУЛЬ 4: ПРЕИМУЩЕСТВА МЕТАЛЛОКОНСТРУКЦИЙ (БЕЗ ИКОНОК) ===== */
const AdvantagesBlock1 = {
    element: document.getElementById('advantagesBlock1'),
    
    advantages: [
        {
            text: 'СОБСТВЕННОЕ ПРОИЗВОДСТВО МЕТАЛЛОКОНСТРУКЦИЙ'
        },
        {
            text: 'ПРОЕКТИРУЕМ С УЧЕТОМ НАКОПЛЕННОГО ОПЫТА'
        },
        {
            text: 'ПРОФЕССИОНАЛЬНЫЙ МОНТАЖ'
        }
    ],
    
    init() {
        if (this.element) {
            this.createAdvantages();
            this.setupAnimations();
            console.log('✅ AdvantagesBlock1 (ПРЕИМУЩЕСТВА МЕТАЛЛОКОНСТРУКЦИЙ) инициализирован');
        }
        return this;
    },

    setPosition(bottom, left = 0) {
        if (this.element) {
            this.element.style.bottom = bottom + 'px';
            this.element.style.left = left + 'px';
            console.log(`📍 Позиция блока преимуществ металлоконструкций: bottom=${bottom}px, left=${left}px`);
        }
    },

    setWidth(width) {
        if (this.element) {
            this.element.style.width = width + 'px';
            console.log(`📏 Ширина блока преимуществ металлоконструкций: ${width}px`);
        }
    },

    setTextAlignment(leftPadding) {
        const items = this.element?.querySelectorAll('.advantage-item1');
        items?.forEach(item => {
            item.style.paddingLeft = leftPadding + 'px';
        });
        console.log(`🎯 Выравнивание текста металлоконструкций: leftPadding=${leftPadding}px`);
    },
    
    createAdvantages() {
        this.advantages.forEach((advantage, index) => {
            const item = document.createElement('div');
            item.className = 'advantage-item1';
            item.style.display = 'flex';
            item.style.alignItems = 'center';
            item.style.marginBottom = '15px';
            
            // СОЗДАЁМ ТОЛЬКО ТЕКСТ, БЕЗ ИКОНОК
            const text = document.createElement('span');
            text.className = 'advantage-text1';
            text.textContent = advantage.text;
            text.style.fontSize = '16px';
            text.style.fontWeight = '500';
            text.style.lineHeight = '1.4';
            
            item.appendChild(text);
            this.element.appendChild(item);
            
            // АНИМАЦИЯ ПОЯВЛЕНИЯ
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 800 + (index * 200));
        });
    },
    
    setupAnimations() {
        console.log('🎬 Анимации преимуществ металлоконструкций настроены');
    }
};

/* ===== МОДУЛЬ 5: КНОПКА МЕТАЛЛОКОНСТРУКЦИЙ (ПРОСТЫЕ АНИМАЦИИ) ===== */
const ActionButton1 = {
    element: document.getElementById('actionButton1'),
    
    init() {
        if (this.element) {
            this.setupEventListeners();
            this.setupAnimations();
            console.log('✅ ActionButton1 с простыми анимациями инициализирован');
        }
        return this;
    },

    setText(text) {
        if (this.element) {
            this.element.innerHTML = text;
            console.log(`📝 Текст кнопки металлоконструкций изменен: "${text}"`);
        }
    },

    setFontWeight(weight) {
        if (this.element) {
            this.element.style.fontWeight = weight;
            console.log(`🔤 Жирность шрифта кнопки металлоконструкций: ${weight}`);
        }
    },

    setFontSize(fontSize) {
        if (this.element) {
            this.element.style.fontSize = fontSize + 'px';
            console.log(`📏 Размер шрифта кнопки металлоконструкций: ${fontSize}px`);
        }
    },

    setPosition(bottom, right) {
        const buttonBlock = this.element?.parentElement;
        if (buttonBlock) {
            buttonBlock.style.bottom = bottom + 'px';
            buttonBlock.style.right = right + 'px';
            console.log(`📍 Позиция кнопки металлоконструкций: bottom=${bottom}px, right=${right}px`);
        }
    },
    
    setupEventListeners() {
        if (this.element) {
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
            
            this.element.addEventListener('click', () => {
                openContactPopup1();
                console.log('🔥 Кнопка металлоконструкций нажата - открываем popup');
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

/* ===== МОДУЛЬ 6: ВСПЛЫВАЮЩЕЕ ОКНО (ИСПРАВЛЕННОЕ) ===== */
const ContactPopup1 = {
    overlay: document.getElementById('contactPopup1'),
    scrollPosition: 0,
    
    init() {
        console.log('✅ ContactPopup1 (ЗАКАЗ МЕТАЛЛОКОНСТРУКЦИЙ) инициализирован');
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
            console.log('📱 Popup металлоконструкций показан, скролл заблокирован');
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
            
            console.log('❌ Popup металлоконструкций скрыт, скролл разблокирован');
        }
    }
};

/* ===== МОДУЛЬ 7: ПРОЦЕСС ПРОИЗВОДСТВА МЕТАЛЛОКОНСТРУКЦИЙ (АВТОНОМНЫЙ) ===== */
const ProcessSteps1 = {
    container: document.getElementById('processStepsContainer1'),
    steps: [],
    
    init() {
        this.steps = document.querySelectorAll('.process-step1');
        this.showAllStepsImmediately();
        console.log('✅ ProcessSteps1 (ЭТАПЫ ПРОИЗВОДСТВА МЕТАЛЛОКОНСТРУКЦИЙ) инициализирован - все элементы видны сразу');
        return this;
    },

    showAllStepsImmediately() {
        this.steps.forEach((step, index) => {
            if (step) {
                step.style.animationPlayState = 'running';
                step.style.opacity = '1';
                step.style.transform = 'translateY(0)';
                
                console.log(`👁️ Шаг производства металлоконструкций ${index + 1} показан сразу`);
            }
        });
    },

    updateStepText(stepNumber, title, text) {
        const step = document.getElementById(`processStep${stepNumber}`);
        if (step) {
            const titleElement = step.querySelector('.process-title1');
            const textElement = step.querySelector('.process-text1');
            
            if (titleElement) titleElement.textContent = title;
            if (textElement) textElement.textContent = text;
            
            console.log(`📝 Обновлен шаг производства металлоконструкций ${stepNumber}: "${title}"`);
        }
    },

    setContainerStyle(maxWidth) {
        if (this.container) {
            this.container.style.maxWidth = maxWidth + 'px';
            console.log(`📏 Ширина контейнера процесса производства металлоконструкций: ${maxWidth}px`);
        }
    }
};

/* ===== ГЛОБАЛЬНЫЕ ФУНКЦИИ ===== */
function openContactPopup1() {
    ContactPopup1.show();
}

function closeContactPopup1() {
    ContactPopup1.hide();
}

/* ===== EVENT LISTENERS ===== */
const contactPopupElement = document.getElementById('contactPopup1');
if (contactPopupElement) {
    contactPopupElement.addEventListener('click', function(e) {
        if (e.target === this) {
            closeContactPopup1();
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactPopup1();
    }
});

/* ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ МОДУЛЕЙ МЕТАЛЛОКОНСТРУКЦИЙ ===== */
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Начинаем инициализацию модулей металлоконструкций...');
    
    try {
        const container1 = HeroContainer1.init();
        const slider1 = BackgroundSlider1.init();
        const titleMain1 = HeroTitleMain1.init();
        const titleSub1 = HeroTitleSub1.init();
        const advantages1 = AdvantagesBlock1.init();
        const button1 = ActionButton1.init();
        const popup1 = ContactPopup1.init();
        const processSteps1 = ProcessSteps1.init();
        
        console.log('🚀 ВСЕ МОДУЛИ МЕТАЛЛОКОНСТРУКЦИЙ ИНИЦИАЛИЗИРОВАНЫ');
        console.log('🏭 МЕТАЛЛОКОНСТРУКЦИИ: Производство в Карелии');
        console.log('📸 ИЗОБРАЖЕНИЯ: 4 фото металлоконструкций');
        console.log('✨ ПРЕИМУЩЕСТВА: 3 пункта БЕЗ ИКОНОК');
        console.log('👁️ ПРОЦЕСС: 5 этапов производства - ВСЕ ВИДНЫ СРАЗУ');
        console.log('⏱️ АВТОПРОКРУТКА: 5 секунд');
        console.log('🔤 ШРИФТЫ: Montserrat');
        
        window.SliderModules1 = {
            Container: container1,
            Slider: slider1,
            TitleMain: titleMain1,
            TitleSub: titleSub1,
            Advantages: advantages1,
            Button: button1,
            Popup: popup1,
            ProcessSteps: processSteps1
        };

        console.log('🎛️ Все модули металлоконструкций доступны через window.SliderModules1');
        
    } catch (error) {
        console.error('❌ Ошибка при инициализации модулей:', error);
    }
});
