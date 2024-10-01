import React, { useState } from 'react';
import './App.css';

const apiUrl = process.env.REACT_APP_BACKEND_URL;
console.log(apiUrl)

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/urls`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ long_url: longUrl }),
      });

      console.log(response);
      const data = await response.json();
      setShortUrl(data.short_code);
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert('Copied to clipboard!');
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div>
          <p>Shortened URL: {shortUrl}</p>
          <button onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      )}
    </div>
  );
}

export default App;
