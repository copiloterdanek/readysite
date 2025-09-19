// === ОПТИМИЗИРОВАННАЯ СИСТЕМА БЫСТРОЙ ЗАГРУЗКИ ===
document.addEventListener('DOMContentLoaded', function() {
    const startupPage = document.getElementById('startupPage');
    const contentBlocks = [
        document.getElementById('mainSite'),
        document.getElementById('sliderBlock'),
        document.getElementById('partnersBlock'),
        document.getElementById('servicesBlock'),
        document.getElementById('footerBlock')
    ];
    
    console.log('🚀 Запуск быстрой системы загрузки...');
    
    // ЗАГРУЖАЕМ ВСЕ ПАРАЛЛЕЛЬНО ВО ВРЕМЯ СТАРТОВОГО ЭКРАНА
    const loadingPromises = [
        // Минимальное время показа стартового экрана (3 секунды вместо 4)
        new Promise(resolve => setTimeout(resolve, 3000)),
        
        // Ожидание полной загрузки DOM и ресурсов
        new Promise(resolve => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.addEventListener('load', resolve);
            }
        }),
        
        // Инициализация фотографий
        new Promise(resolve => {
            if (typeof startPhotoLazyLoading === 'function') {
                startPhotoLazyLoading();
            }
            setTimeout(resolve, 100);
        })
    ];
    
    // ЖДЕМ ЗАВЕРШЕНИЯ ВСЕЙ ЗАГРУЗКИ
    Promise.all(loadingPromises).then(() => {
        console.log('✅ Страница полностью загружена! Показываем контент...');
        
        // СРАЗУ ПОКАЗЫВАЕМ ВСЕ БЛОКИ ОДНОВРЕМЕННО
        contentBlocks.forEach(block => {
            if (block) {
                block.classList.add('content-visible');
            }
        });
        
        console.log('🎯 Все блоки показаны!');
        
        // СРАЗУ СКРЫВАЕМ СТАРТОВЫЙ ЭКРАН
        startupPage.style.transition = 'opacity 0.5s ease-out';
        startupPage.style.opacity = '0';
        
        setTimeout(() => {
            startupPage.style.display = 'none';
            console.log('✨ Переход завершен! Страница готова к использованию.');
        }, 500);
        
    }).catch(error => {
        console.error('❌ Ошибка при загрузке:', error);
        
        // FALLBACK: показываем контент даже при ошибках
        contentBlocks.forEach(block => {
            if (block) {
                block.classList.add('content-visible');
            }
        });
        
        setTimeout(() => {
            startupPage.style.display = 'none';
        }, 4000);
    });
    
    console.log('⏳ Загрузка началась, ожидайте...');
});

// === YANDEX.METRIKA COUNTER ===
(function(m,e,t,r,i,k,a){
    m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    k=e.createElement(t);
    a=e.getElementsByTagName(t)[0];
    k.async=1;
    k.src=r;
    a.parentNode.insertBefore(k,a);
})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(48298379, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

// === ФУНКЦИИ ДЛЯ POPUP ===
function closeContactPopup() {
    const popup = document.getElementById('contactPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

function openPartnerLink(url) {
    window.open(url, '_blank');
}
