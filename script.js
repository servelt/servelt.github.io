// 📌 페이지가 로드되면 항상 맨 위에서 시작하도록 설정
window.onload = function() {
    window.scrollTo(0, 0);
};

// 📌 부드러운 스크롤 기능 (예: 다운로드 버튼 클릭 시 부드럽게 이동)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // 네비게이션 높이 보정
                behavior: "smooth"
            });
        }
    });
});
