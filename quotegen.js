const quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person:"Nelson Mandela"
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        person:"Walt Disney"
    },
    {
        quote:"Life is really simple, but we insist on making it complicated.",
        person:"Confucius"
    },
    {
        quote:"You must be the change you wish to see in the world. ",
        person:"Mahatma Gandhi"
    },
    {
        quote:"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        person:"Mother Teresa"
    },
    {
        quote:"The only thing we have to fear is fear itself.",
        person:"Franklin D. Roosevelt"
    },
    {
        quote:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. ",
        person:"Martin Luther King Jr."
    },
    {
        quote:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        person:"Helen Keller"
    },
    {
        quote:"It is during our darkest moments that we must focus to see the light. ",
        person:"Aristotle"
    },
    {
        quote:"Be yourself; everyone else is already taken.",
        person:"Oscar Wilde"
    }
]
let quote = document.querySelector('.quote')
let person = document.querySelector('.person')
let nqbtn = document.querySelector('#new-quote')
nqbtn.addEventListener('click',function(){
    let ind = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[ind].quote
    person.innerText = quotes[ind].person
})