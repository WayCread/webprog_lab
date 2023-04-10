import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [items, setItems] = useState(['Кучинський', 'Богдан', 'ІПЗ-41']);
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const addItem = () => { //додавання нового рядку
    const newItem = inputValue.trim();
    if (newItem) {
      setItems([...items, newItem]);
      setInputValue('');
      setMessage(`Доданий рядок: ${newItem} до списку`);
    }
  };

  const removeItem = (index) => { //видалення рядку в списку
    const removedItem = items[index];
    setItems(items.filter((item, i) => i !== index));
    setMessage(`Спливаюче повідомлення: видалено ${removedItem} зі зписку`);
  };

  const clearList = () => { //очищення списку
    setItems([]);
    setMessage('Спливаюче повідомлення: список успішно очищений');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>Лабораторна робота 6</h1>
      <h2>Список</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => removeItem(index)}>Видалити</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button onClick={addItem}>Додати в список</button>
        <button onClick={clearList}>Очистити список</button>
      </div>
      {message && (
        <div className="message">
          <p>{message}</p>
          <button onClick={() => setMessage('')}>Закрити</button>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
