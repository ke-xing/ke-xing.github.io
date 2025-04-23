document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');
    const themeIcon = themeSwitch.querySelector('i');
    
    // 检查本地存储中是否有保存的主题
    const savedTheme = localStorage.getItem('theme');
    
    // 如果有保存的主题，则应用它
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // 主题切换按钮点击事件
    themeSwitch.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // 更新 HTML 属性
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // 更新图标
        updateThemeIcon(newTheme);
        
        // 保存到本地存储
        localStorage.setItem('theme', newTheme);
    });
    
    // 更新主题图标
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
});