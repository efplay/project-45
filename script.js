const dice = document.querySelectorAll('.dice');
const rollBtn = document.querySelector('.roll');

const randomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1; 
    rollDice(random);
};

const rollDice = (random) => {
  
    dice.forEach(die => die.style.animation = 'rolling 4s');

    setTimeout(() => {
        
        dice.forEach(die => {
            switch (random) {
                case 1:
                    die.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    break;
                case 6:
                    die.style.transform = 'rotateX(180deg) rotateY(0deg)';
                    break;
                case 2:
                    die.style.transform = 'rotateX(-90deg) rotateY(0deg)';
                    break;
                case 3:
                    die.style.transform = 'rotateX(0deg) rotateY(90deg)';
                    break;
                case 5:
                    die.style.transform = 'rotateX(90deg) rotateY(0deg)';
                    break;
                case 4:
                    die.style.transform = 'rotateX(0deg) rotateY(-90deg)';
                    break;
                default:
                    break;
            }
            die.style.animation = 'none'; 
        });
    }, 4050);
};


rollBtn.addEventListener('click', randomDice);
