import { useState } from 'react';
import Header from './Header.jsx';
// import Main from './Main.jsx';
import Footer from './Footer.jsx';
import Textarea from './Textarea.jsx';
import Stats from './Stats.jsx';
import {
  INSTAGRAM_MAX_CHARACTERS,
  X_FREE_MAX_CHARACTERS
} from '../lib/constants.js';

function App() {
  const [text, setText] = useState('');
  const stats = [
    // {
    //   label: 'Words',
    //   value: text.split(' ')[0] === '' ? 0 : text.split(' ').length
    // },
    // { label: 'Characters', value: text.length },
    {
      label: 'post/reel caption',
      value: INSTAGRAM_MAX_CHARACTERS - text.length
    },
    {
      label: 'X free user account',
      value: X_FREE_MAX_CHARACTERS - text.length
    },
    {
      label: 'Instagram post/reel caption',
      value: INSTAGRAM_MAX_CHARACTERS - text.length
    },
    {
      label: 'X free user account',
      value: X_FREE_MAX_CHARACTERS - text.length
    }
  ];

  return (
    <>
      <Header />
      <main className='container'>
        <Textarea text={text} setText={setText} />
        <Stats stats={stats} />
      </main>
      <Footer />
    </>
  );
}

export default App;
