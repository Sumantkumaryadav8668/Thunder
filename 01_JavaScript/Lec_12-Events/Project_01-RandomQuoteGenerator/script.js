
const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Dream big and dare to fail.",
    "Do what you can, with what you have, where you are.",
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future depends on what you do today.",
    "Everything you can imagine is real.",
    "Stay hungry, stay foolish.",
    "Great things never come from comfort zones.",
    "Push yourself, because no one else is going to do it for you.",
    "Your limitation is only your imagination.",
    "Hard work beats talent when talent doesn't work hard.",
    "A journey of a thousand miles begins with a single step.",
    "Don't stop when you're tired. Stop when you're done.",
    "Success is the sum of small efforts repeated day in and day out.",
    "The secret of getting ahead is getting started.",
    "The best way to predict the future is to create it.",
    "Mistakes are proof that you are trying.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If you want to fly, give up everything that weighs you down.",
    "Opportunities don't happen. You create them.",
    "The harder you work, the luckier you get.",
    "Small steps every day lead to big results.",
    "Success doesn't come overnight. Keep working.",
    "Discipline is the bridge between goals and accomplishment.",
    "Don't be afraid to give up the good to go for the great.",
    "You learn more from failure than from success.",
    "Act as if what you do makes a difference. It does.",
    "The way to get started is to quit talking and begin doing.",
    "Everything has beauty, but not everyone sees it.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Quality means doing it right when no one is looking.",
    "Failure is simply the opportunity to begin again, this time more intelligently.",
    "The best revenge is massive success.",
    "Do something today that your future self will thank you for.",
    "Don't limit your challenges. Challenge your limits.",
    "You don't have to be perfect to be amazing.",
    "Focus on progress, not perfection.",
    "Your mindset determines your success.",
    "Confidence comes from preparation.",
    "Great things take time.",
    "Believe in yourself and all that you are.",
    "Never give up on something that you can't go a day without thinking about.",
    "Success requires consistency, not perfection.",
    "The harder the battle, the sweeter the victory.",
    "Make each day your masterpiece.",
    "Learn from yesterday, live for today, hope for tomorrow.",
    "A positive attitude gives you power over your circumstances."
];

const h2 = document.getElementById('h2');
const button = document.querySelector('button');

button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*50);
    // console.log(index)
    h2.textContent = quotes[index];
})