document.addEventListener('DOMContentLoaded', function() {
    const startupPage = document.getElementById('startupPage');
    const welcomeText = document.querySelector('.startup-welcome');
    const loadingText = document.querySelector('.startup-loading');
    const loadingSpinner = document.querySelector('.loading-spinner');
    
    // Проверяем, был ли пользователь уже на сайте в этой сессии
    const hasVisitedInSession = sessionStorage.getItem('hasVisited');
    
    if (hasVisitedInSession) {
        // Если уже был - показываем "ЗАГРУЗКА..."
        welcomeText.style.display = 'none';
        loadingText.style.display = 'block';
        loadingSpinner.style.display = 'block';
        
        // Быстрее скрываем для loading screen
        setTimeout(() => {
            hideStartup();
        }, 2000);
    } else {
        // Если первый раз - показываем "ДОБРО ПОЖАЛОВАТЬ"
        loadingText.style.display = 'none';
        loadingSpinner.style.display = 'none';
        welcomeText.style.display = 'block';
        
        // Дольше показываем приветствие
        setTimeout(() => {
            hideStartup();
        }, 3000);
    }
    
    // Клик для пропуска
    startupPage.addEventListener('click', () => {
        hideStartup();
    });
    
    function hideStartup() {
        startupPage.classList.add('hide');
        
        // Помечаем, что пользователь уже видел приветствие
        sessionStorage.setItem('hasVisited', 'true');
        
        setTimeout(() => {
            startupPage.style.display = 'none';
            document.body.style.backgroundColor = '#ffffff';
        }, 1000);
    }
});
