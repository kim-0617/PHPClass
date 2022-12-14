// 로그인 버튼
const loginBtn = document.querySelector(".loginBtn");
const loginPopup = document.querySelector(".login__popup");
const loginClose = document.querySelector(".btn-close");

if(loginBtn) {
    loginBtn.addEventListener('click', () => {
        loginPopup.classList.add('open');
        document.body.classList.add("fixed");
    });
    loginClose.addEventListener("click", () => {
        loginPopup.classList.remove("open");
        document.body.classList.remove("fixed");
    });
}