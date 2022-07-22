//Khai báo class vào biến
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const btnClose = document.querySelector('.btn-close');
const btnXclose = document.querySelector('.close-modal');
const showModal = document.querySelector('.modal');
const btnClosemodal = document.querySelector('.close-modal');
const containerModal = document.querySelector('.container-modal');
//Hàm mở modal
function showModalbuyTickets(){
    showModal.classList.add('open');
}
//Lặp qua từng thể btn và nghe hành vi click và chạy hàm
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showModalbuyTickets);
}
//Hàm đóng modal
function closeModalbuyTickets(){
    showModal.classList.remove('open');
}
//Lắng nghe hành vi click và chạy hàm
    btnClose.addEventListener('click',closeModalbuyTickets);
    btnXclose.addEventListener('click',closeModalbuyTickets);
    showModal.addEventListener('click',closeModalbuyTickets);
    containerModal.addEventListener('click',function(event){
        event.stopPropagation();
    });

