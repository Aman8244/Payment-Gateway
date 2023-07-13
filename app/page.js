"use client";

import { useState } from "react";

export default function Home() {

  const [option, setOption] = useState('');
  const [username, setUsername] = useState('');
  const [link, setLink] = useState('');

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make POST request to '/api/submit' with the selected option, username, and link
    // Here, you can use libraries like Axios or fetch to perform the actual POST request
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ option, username, link }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from server:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setUsername('');
      setOption('');
      setLink('');
     fetch("https://qropay.com/api/add_order.php",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:{
        "key": "2323180097403",
        "secretKey":"e4e2fb39632ba7d1f915bdb4d84bc086",
        "order_id": "1234567890",
        "amount": "100",
        "purpose": "Product Name",
        "customer_email": "jondoe@gmail.com",
        "redirect_url": "http://google.com"
      }
     }).then(res=>{
      console.log(res);
     })
  };

  return (
    <>
    <header>
    <nav>
        <span>AMan</span>
      </nav>
    </header>
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="option">Choose an option:</label>
        <select id="option" value={option} onChange={handleOptionChange}>
          <option value="">None</option>
          <option value="increaseFollower">Increase Follower</option>
          <option value="increaseLikes">Increase Likes</option>
        </select>
        {option === 'increaseFollower' && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        )}
        {option === 'increaseLikes' && (
          <div>
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={handleLinkChange}
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </main>
    </>
  );
}
