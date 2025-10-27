import { useState } from 'react';
import Warning from './Warning.jsx';

export default function Textarea({ text, setText}) {
  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      setWarning('Not on my watch! No script tags allowed!');
      newText = newText.replaceAll('<script>', '');
    } else if (newText.includes('@') ) {
      setWarning('Whoa there! @ symbols aren\'t welcome here.');
      newText = newText.replaceAll('@', '');
    } else {
      setWarning('');
    }
    setText(newText);
  };

  return (
    <section className='textarea'>
      <textarea
        value={text}
        onChange={handleChange}
        spellCheck='false'
        placeholder='Enter your text'
      />
      {warning && <Warning warning={warning} />}
    </section>
  );
}
