const cards = document.querySelector('.getBig');
cards.addEventListener('mouseenter', function() {
    //   console.log('mouse over');

    cards.classList.add('Bigger')

})
cards.addEventListener('mouseleave', function() {
    //   console.log('mouse left');

    cards.classList.remove('Bigger')

})