import { useState } from 'react';


function HabitForm(props) {
  const [textInput, setTextInput] = useState('');

  function formSubmit(event) {
    event.preventDefault();
    props.addHabit(textInput);
    setTextInput('');
  }

  return (
    <form onSubmit={formSubmit}>
      <input 
        value={textInput}
        onChange={(event) => setTextInput(event.target.value)}
      />
      <button>
        Добавить
      </button>
    </form>
  );
}

export default HabitForm;