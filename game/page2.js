function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var cardeck = [
    new card(
       'The Fool',
        'New Beginnings and Adventure.<br> Think before you act.',
        '0'
    ),
    new card(
        'The Magician',
        'Creation.<br> Creating magic by your own determination yields a fruitful result.',
        '1'
    ),
    new card(
        'The High Priestess',
        'Learning and Observing. <br> Power from feminine energy.',
        '2'
    ),
    new card(
        'The Empress',
        'Connection and Kindness. <br> How is your link with feminine energy?',
        '3'
    ),
    new card(
        'The Emperor',
        'Authority and Structure.<br> Are you confident in what you do?',
        '4'
    ),
    new card(
        'The Hierophant',
        'Spiritual wisdom and conformity. <br> Be familiar and establish your system.',
        '5'
    ),
    new card(
        'The Lovers',
        'Love, Harmony and Choices. <br> Choices of two: harmony or disbalance.',
        '6'
    ),
    new card(
        'The Chariot',
        'Direction and Action. <br> You are motivated and ambitious; now is the time to get what you want.',
        '7'
    ),
    new card(
        'Strength',
        'Strength and courage. <br> You have the strength and courage to overcome any obstacle; act with grace and sensitivity.',
        '8'
    ),
    new card(
        'The Hermit',
        'Wisdom and enlightenment.<br> A quiet moment with yourself, a period of growth and exploration.',
        '9'
    ),
    new card(
        'Wheel of Fortune',
        'Chance and turning points.<br> You are in luck; do what you are up to.',
        '10'
    ), 
    new card(
        'Justice',
        'Fairness and Life lessons. <br> Justice arrives to restore balance and order.',
        '11'
    ),
    new card(
        'The Hanged Man',
        'Letting go and Reflecting. <br> It is time to reflect.',
        '12'
    ),
    new card(
        'Death',
        'Transitions and Resolutions. <br> A new chapter is waiting to begin.',
        '13'
    ),
    new card(
        'Temperance',
        'Balance and Moderation. <br> Resist the temptation to react immediately.',
        '14'
    ),
    new card(
        'The Devil',
        'Material focus and Desire. <br> Redirect your attention from the desire toward things that matter more to you.',
        '15'
    ),
    new card(
        'The Tower',
        'Intense and Sudden change.<br> This process can be painful and difficult, but it will lead to a fresh start.',
        '16'
    ),
    new card(
        'The Star',
        'Hope and Healing. <br> A time for healing and finding peace in mind.',
        '17'
    ),
    new card(
        'The Moon',
        'Confusion and Fear. <br> Take a deep breath and trust your decision. ',
        '18'
    ),
    new card(
        'The Sun',
        'Optimism and success. <br> The hard times will not last forever, and you will move on to brighter days.',
        '19'
    ),
    new card(
        'Judgment',
        'Awakening and Absolution. <br> The ideal time to weigh your action and make sure it is consistent with your values and beliefs.',
        '20'
    ),
    new card(
        'The World',
        'Fulfillment, Harmony, and Travel. <br> A major event is happening in your life; be proud of what you learn along the way.',
        '21'
    ),
];

function getRandom(num){
    var randomNumber = 
    Math.floor(Math.random()* num);
    return randomNumber;
}

document.getElementById("draw").onclick 
= function(){
    var index = getRandom(21);
    var currentCard = cardeck [index];

    document.getElementById("display").innerHTML 
    = '<img src= "imgs/' + 
    currentCard.image + '.jpeg"><h2>' +
    currentCard.name + '</h2><p>' +
    currentCard.description +'</p>';
};