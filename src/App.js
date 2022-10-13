import { useState } from 'react';
import './App.css';

function App() {
  const [bvn, setBvn] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setBvn(e.target.value)
  }


  const verifyBvn = async () => {
    let response = await fetch(
      `https://api.flutterwave.com/v3/kyc/bvns/${bvn}`,
      {
        'headers': {
          'Authorization': `Bearer ${process.env.REACT_APP_SECRETE_KEY}`,
        },
      }
    )
    let data = await response.json()
    setMessage(data)
    setBvn('')
  }

  return (
    <div className='App'>
      <input
        type='number'
        placeholder='Enter BNV'
        name='bvn'
        id='bvn'
        value={bvn}
        onChange={handleChange}
      />
      <pre>{message}</pre>
      <button onClick={verifyBvn}>Verify BVN</button>
    </div>
  )
}

export default App;
