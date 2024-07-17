const generateQuoteBtn = document.getElementById("quoteBtn");
const quoteOutput = document.getElementById("quoteOutput");
const authorOutput = document.getElementById("authorOutput");

const arrayOfQuotes = [
  {
    author: "Albert Einstein",
    quote:
      "We cannot solve problems with the kind of thinking we employed when we came up with them.",
  },
  {
    author: "Isaac Newton",
    quote:
      "If I have seen further it is by standing on the shoulders of Giants.",
  },
  {
    author: "Yoda",
    quote: "Do or do not. There is no try.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you're busy making other plans.",
  },
  {
    author: "Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    author: "Henry Ford",
    quote: "Whether you think you can or you think you can’t, you’re right.",
  },
  {
    author: "Buddha",
    quote: "The mind is everything. What you think you become.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Maya Angelou",
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Dalai Lama",
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    author: "J.K. Rowling",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    author: "George Bernard Shaw",
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
  },
  {
    author: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication.",
  },
  {
    author: "Charles Darwin",
    quote:
      "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
  },
  {
    author: "Anne Frank",
    quote:
      "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  },
  {
    author: "Socrates",
    quote: "An unexamined life is not worth living.",
  },
  {
    author: "Pablo Picasso",
    quote:
      "Every child is an artist. The problem is how to remain an artist once he grows up.",
  },
  {
    author: "Bruce Lee",
    quote:
      "Knowing is not enough, we must apply. Willing is not enough, we must do.",
  },
  {
    author: "William Shakespeare",
    quote: "To be, or not to be, that is the question.",
  },
  {
    author: "Mother Teresa",
    quote: "If you can't feed a hundred people, then feed just one.",
  },
  {
    author: "Martin Luther King Jr.",
    quote: "Injustice anywhere is a threat to justice everywhere.",
  },
  {
    author: "Oprah Winfrey",
    quote:
      "The more you praise and celebrate your life, the more there is in life to celebrate.",
  },
  {
    author: "Albert Camus",
    quote:
      "In the depth of winter, I finally learned that within me there lay an invincible summer.",
  },
  {
    author: "Jane Austen",
    quote: "There is no charm equal to tenderness of heart.",
  },
  {
    author: "Viktor E. Frankl",
    quote:
      "When we are no longer able to change a situation, we are challenged to change ourselves.",
  },
  {
    author: "Helen Keller",
    quote:
      "The only thing worse than being blind is having sight but no vision.",
  },
  {
    author: "Isaac Asimov",
    quote:
      "People who think they know everything are a great annoyance to those of us who do.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Carl Jung",
    quote: "Who looks outside, dreams; who looks inside, awakes.",
  },
  {
    author: "Mark Zuckerberg",
    quote: "The biggest risk is not taking any risk.",
  },
  {
    author: "Warren Buffett",
    quote:
      "Someone's sitting in the shade today because someone planted a tree a long time ago.",
  },
  {
    author: "Sun Tzu",
    quote: "The supreme art of war is to subdue the enemy without fighting.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  },
  {
    author: "Marie Curie",
    quote: "Nothing in life is to be feared, it is only to be understood.",
  },
  {
    author: "Tony Robbins",
    quote:
      "Setting goals is the first step in turning the invisible into the visible.",
  },
  {
    author: "Amelia Earhart",
    quote: "The most effective way to do it, is to do it.",
  },
  {
    author: "Muhammad Ali",
    quote:
      "He who is not courageous enough to take risks will accomplish nothing in life.",
  },
  {
    author: "Elon Musk",
    quote:
      "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    author: "Bill Gates",
    quote: "Your most unhappy customers are your greatest source of learning.",
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  quoteOutput.innerHTML = `<span>${arrayOfQuotes[random].quote}</span>`;
  authorOutput.innerHTML = `<small>-${arrayOfQuotes[random].author}-</small>`;
}

generateQuoteBtn.addEventListener("click", generateQuote);
