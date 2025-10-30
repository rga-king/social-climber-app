import { useState, useRef } from 'react';
import Warning from './Warning.jsx';

export default function Textarea({ text, setText }) {
  const [warning, setWarning] = useState('');
  const textareaRef = useRef(null);
  const words = text.split(' ')[0] === '' ? 0 : text.split(' ').length;
  const chars = text.length;

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      setWarning('Not on my watch! No script tags allowed!');
      newText = newText.replaceAll('<script>', '');
    } else if (newText.includes('@')) {
      setWarning("Whoa there! @ symbols aren't welcome here.");
      newText = newText.replaceAll('@', '');
    } else {
      setWarning('');
    }
    setText(newText);
  };

  const handleInput = () => {
    // auto-resizes the textarea based on content
    const el = textareaRef.current;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <div className='textarea'>
      <section className='textStats'>
        <p>Words: {words}</p>
        <p>Characters: {chars}</p>
      </section>
      <section className='textarea-input'>
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          onInput={handleInput}
          spellCheck='false'
          placeholder='Enter your text'
        />
        {warning && <Warning warning={warning} />}
      </section>
    </div>
  );
}
