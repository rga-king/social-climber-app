import { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Textarea from './Textarea.jsx';
import Stats from './Stats.jsx';
import { socialMediaStats } from '../data/socialMediaData.js';

function App() {
  const [text, setText] = useState('');

  return (
    <>
      <Header />
      <main className='container'>
        <Textarea text={text} setText={setText} />
        <Stats stats={socialMediaStats} charCount={text.length} />
      </main>
      <Footer />
    </>
  );
}

export default App;
