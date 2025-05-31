
import { useState, useEffect } from 'react';
import { RefreshCw, Twitter } from 'lucide-react';

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King Jr."
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
    author: "Unknown"
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi"
  },
  {
    text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
    author: "Steve Jobs"
  },
  {
    text: "People who are crazy enough to think they can change the world, are the ones who do.",
    author: "Rob Siltanen"
  },
  {
    text: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino"
  },
  {
    text: "Entrepreneurs are great at dealing with uncertainty and also very good at minimizing risk. That's the classic entrepreneur.",
    author: "Mohnish Pabrai"
  },
  {
    text: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou"
  },
  {
    text: "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    author: "Johann Wolfgang von Goethe"
  },
  {
    text: "Imagine your life is perfect in every respect; what would it look like?",
    author: "Brian Tracy"
  },
  {
    text: "We generate fears while we sit. We overcome them by action.",
    author: "Dr. Henry Link"
  },
  {
    text: "Whether you think you can or think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    text: "The man who has confidence in himself gains the confidence of others.",
    author: "Hasidic Proverb"
  }
];

const backgroundColors = [
  'from-purple-400 via-pink-500 to-red-500',
  'from-blue-400 via-purple-500 to-pink-500',
  'from-green-400 via-blue-500 to-purple-600',
  'from-yellow-400 via-red-500 to-pink-500',
  'from-indigo-400 via-purple-500 to-pink-500',
  'from-teal-400 via-blue-500 to-indigo-600',
  'from-orange-400 via-pink-500 to-red-500',
  'from-cyan-400 via-blue-500 to-purple-600'
];

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [backgroundGradient, setBackgroundGradient] = useState(backgroundColors[0]);

  const getRandomQuote = () => {
    setIsLoading(true);
    
    // Simulate API call delay for better UX
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const gradientIndex = Math.floor(Math.random() * backgroundColors.length);
      
      setCurrentQuote(quotes[randomIndex]);
      setBackgroundGradient(backgroundColors[gradientIndex]);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    // Load initial random quote
    getRandomQuote();
  }, []);

  const tweetUrl = `https://twitter.com/intent/tweet?text="${currentQuote.text}" - ${currentQuote.author}`;

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} flex items-center justify-center p-4 transition-all duration-1000 ease-in-out`}>
      <div 
        id="quote-box" 
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-2xl w-full mx-auto transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
      >
        <div className="text-center">
          <div className="mb-8">
            <blockquote 
              id="text" 
              className={`text-xl md:text-2xl lg:text-3xl font-serif text-gray-800 leading-relaxed mb-6 transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
            >
              "{currentQuote.text}"
            </blockquote>
            <cite 
              id="author" 
              className={`text-lg md:text-xl text-gray-600 font-medium transition-opacity duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
            >
              — {currentQuote.author}
            </cite>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              id="new-quote"
              onClick={getRandomQuote}
              disabled={isLoading}
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${backgroundGradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
              {isLoading ? 'Loading...' : 'New Quote'}
            </button>
            
            <a
              id="tweet-quote"
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transform transition-all duration-300 hover:scale-105"
            >
              <Twitter className="w-5 h-5" />
              Tweet Quote
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-opacity-70 text-sm">
        Random Quote Machine
      </div>
    </div>
  );
};

export default Index;
