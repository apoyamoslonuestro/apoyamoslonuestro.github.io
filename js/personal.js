(function(){

    const personal = [...document.querySelectorAll('.personal__body')];
    const buttonNext = document.querySelector('#nuevo')
    const buttonBefore = document.querySelector('#actual')
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPersonal = document.querySelector('.personal__body_show').dataset.id;
        value = Number(currentPersonal);
        value+= add;

        personal[Number(currentPersonal)-1].classList.remove('personal__body_show');
        if(value === personal.length+1 || value === 0 ){
            value = value === 0 ? personal.length  : 1;
 
        }

        personal[value-1].classList.add('personal__body_show');
     

    }

})();