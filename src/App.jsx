/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import dbQuotes from "./db/quote.json"
import { getRandom } from "./utils/random"
import QuoteBox from './components/QuoteBox'

const bgImages = ["bg1", "bg2", "bg3", "bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setBgImage] = useState(getRandom(bgImages))
  

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgImage(getRandom(bgImages))
  }

  return (
    <main className={`app ${bgImage}`}>
      <section className='app__container'>
        <h1>Fortune Cookies</h1>

        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase} />

        <footer>
          <h3>Author: {quote.author}</h3>
        </footer>
      </section>
    </main>
  );
}

export default App
