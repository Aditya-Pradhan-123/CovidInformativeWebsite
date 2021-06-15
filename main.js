const mobileBtn = document.getElementById('mobile-cta');
              const nav = document.querySelector('nav');
              const mobileBtnExit = document.getElementById('mobile-exit');

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })

        mobileBtnExit.addEventListener('click', () => {
            nav.classList.remove('menu-btn');
        })

       
const accordion = document.getElementsByClassName('contentBx');

for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}
