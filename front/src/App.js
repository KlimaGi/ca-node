import React, { useRef, useState } from 'react';
import './styles.css';

function App() {
  const inpRef = useRef();
  const [names, setNames] = useState([]);

  async function addName() {
    const res = await fetch('http://localhost:4000/user/' + inpRef.current.value);
    const data = await res.json();
    setNames(data.names);
    console.log('data', data);
  }

  async function handleDelete(name) {
    const res = await fetch('http://localhost:4000/user/' + name, { method: 'DELETE' });
    const data = await res.json();
    setNames(data.names);
    console.log('data deleted', data);
  }

  return (
    <div className='d-flex f-direction'>
      <h3>node example</h3>

      <div className="main d-flex">
        <input ref={inpRef} placeholder='username' className='input' type='text'></input>
        <button onClick={addName} className='button'>Add</button>
      </div>

      <div className='container'>
        {names.map((name, i) => (
          <div
            className='item'
            key={i}
          >
            <div>{name}</div>
            <button onClick={() => handleDelete(name)} >X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
