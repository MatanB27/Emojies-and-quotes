import './App.css';
import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Emojies from './Emoji';
import About from './components/About';
import EmojiSingle from './EmojiSingle';
import Weather from './Weather';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/emojies' exact component={Emojies}/>
          <Route path='/emojies/:slug'component={EmojiSingle}/>
          <Route path='/weather' component={Weather}/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  const [loding, setLoading] = useState(false);
  const [quote, setQuote] = useState({
    quote: '',
    author: ''
  });

  const fetchData = async () => {
    try{
        setLoading(true);
        const data = await fetch('https://api.quotable.io/random');
        const json = await data.json();
        setQuote({
          quote: json.content,
          author: json.author
        });
        setLoading(false);
    }catch(e){
        console.log(e);
    }
}

useEffect(() => {
  fetchData();
}, []) //Only run once
  
  return(
    <div>
        <div class="quote-wrapper">
           <blockquote class="text" cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">
            <p>{quote.quote}</p>
            <footer>– {quote.author}</footer>
            </blockquote>
        </div>
    </div>
  );
}
export default App;
