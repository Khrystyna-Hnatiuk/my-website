function OpenMenu(){
    let menu = document.querySelector('.openedMenu');
    let menuBtn = document.querySelector('.burger-menu');
    if(menu.style.display =='block')
    {
        menu.style.display = "none"; // Закриваємо меню
        // menuBtn.style.color = 'black';
        menuBtn.style.color ='white';


    } else {
        menu.style.display = "block"; // Відкриваємо меню
   menuBtn.style.marginLeft ='100px';

      }
    }
