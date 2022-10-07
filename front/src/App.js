import React, { useRef, useState } from 'react';
import './styles.css';

function App() {
  const inpRef = useRef();
  const userNameRef = useRef();
  const imageRef = useRef();
  const colorRef = useRef();

  const chatInpRef = useRef()
  const chatTextRef = useRef();
  const [names, setNames] = useState([]);
  const [users, setUsers] = useState([]);

  const [messages, setMessages] = useState([]);

  async function addName() {
    const res = await fetch('http://localhost:4000/user/' + inpRef.current.value);
    const data = await res.json();
    setNames(data.names);
    inpRef.current.value = '';
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

    userNameRef.current.value = '';
    colorRef.current.value = '';
    imageRef.current.value = '';
  }

  async function addMsg() {
    const msgData = {
      name: chatInpRef.current.value,
      msg: chatTextRef.current.value,
    }

    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(msgData)
    };
    const res = await fetch('http://localhost:4000/createMessage', options);
    const data = await res.json();
    setMessages(data);
    console.log('msg data', data);
    chatInpRef.current.value = '';
    chatTextRef.current.value = '';
  }

  async function deleteMsg(message) {
    console.log('message', message);
    const options = {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(message)
    };
    const res = await fetch('http://localhost:4000/deleteMessage', options);
    const data = await res.json();
    setMessages(data);

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
            <button onClick={() => handleDelete(name)}>X</button>
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
          <div
            key={color}
            className='user-item'
            style={{ borderLeft: `8px solid ${color}` }}>
            <img
              className='user-image'
              src={image}
              alt='user' />
            <p>{name}</p>

          </div>))}
      </div>


      <div>
        <h2>CHAT</h2>
        <div className='chat-container'>
          {messages.map(({ name, msg }, i) => (
            <div key={i} className='msg'>
              <p><b>{name}:</b> {msg}</p>
              <button onClick={() => deleteMsg({ name, msg })}>x</button>
            </div>
          ))}
        </div>

        <div className='d-flex'>
          <input
            ref={chatInpRef}
            placeholder='username'
            className='input'
            type='text'
          />
          <textarea
            ref={chatTextRef}
            placeholder='your message'
            className='input'
            type='text' />
          <button onClick={addMsg} className='button'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
// * create mini aplication where in front end user provides his name and photo
// * with post request you send it to back end, save it to array
// * after item is saved in array in back end, all array is sent back to the front
// * when array received in front items are displayed with map

// create application where user can add products to fake internet shop
// each product should have these props: photo, price, title
// products should be uploaded to back-and
// products should be shown in front end
// there should be possibility to delete product from back end (send request from front-end)
// if that was easy, add shopping car logic
// user adds product to shopping car and cart shows total amount of products and total price