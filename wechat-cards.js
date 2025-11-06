// 公众号文章卡片交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 为所有卡片添加点击事件
  const articleCards = document.querySelectorAll('.article-card');
  
  articleCards.forEach(card => {
    card.addEventListener('click', function() {
      const url = this.getAttribute('data-url');
      if (url) {
        // 在新标签页中打开文章
        window.open(url, '_blank');
      }
    });
  });
  
  // 添加键盘可访问性
  articleCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const url = this.getAttribute('data-url');
        if (url) {
          window.open(url, '_blank');
        }
      }
    });
  });
});