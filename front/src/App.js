import React, { useRef, useState } from 'react';
import './styles.css';

function App() {
  const inpRef = useRef();
  const userNameRef = useRef();
  const imageRef = useRef();
  const colorRef = useRef();
  const [names, setNames] = useState([]);
  const [users, setUsers] = useState([]);

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

  async function send() {
    const userData = {
      name: userNameRef.current.value,
      color: colorRef.current.value,
      image: imageRef.current.value,
    }

    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userData)
    }

    const res = await fetch("http://localhost:4000/createUser", options);
    const data = await res.json();
    setUsers(data);
    console.log('data', data);
  }

  return (
    <div className='d-flex f-direction'>
      <h3>node example</h3>

      <div className="main d-flex">
        <input
          ref={inpRef}
          placeholder='username'
          className='input'
          type='text'
        />
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

      <div className='container'>
        <input ref={userNameRef} placeholder='enter your name' className='input'
          type='text' />
        <input ref={imageRef} placeholder='your image url' className='input' />
        <div className='item'>
          <label>Pick your favorite color</label>

          <input
            ref={colorRef}
            type='color'
            className='color-block'
          />
        </div>
        <button onClick={send} className="button">send data</button>
      </div>

      <div className='card-container'>
        {users.map(({ name, color, image }) => (
          <div key={color} className='user-item' style={{ borderLeft: `8px solid ${color}` }}>
            <img className='user-image' src={image} alt='user' />
            <p>{name}</p>

          </div>))}
      </div>

    </div>
  );
}

export default App;
// * create mini aplication where in front end user provides his name and photo
// * with post request you send it to back end, save it to array
// after item is saved in array in back end, all array is sent back to the front
// when array received in front items are displayed with map