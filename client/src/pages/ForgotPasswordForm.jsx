import axios from 'axios';
import React, { useState } from 'react';

const baseUrl = 'http://localhost:8080/api/v1/user';
function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const setVal = (e) => {
    setEmail(e.target.value);
    console.log(`Email: ${email}`);
  };

  const sendLink = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/forgot-password`, {
        email,
      });
      console.log(`data : ${data}`);
      setMsg(data.message);
      setError('');
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg('');
      }
    }
  };
  return (
    <div class='max-w-screen-sm m-auto pt-40'>
      <h1 class='text-center text-3xl text-gray-500 mb-3'>Forgot Password?</h1>
      <form onSubmit={sendLink} class='shadow w-full rounded-lg p-10'>
        {error && (
          <p class='text-center p-2 mb-3 bg-red-500 text-white'>{error}</p>
        )}
        {msg && (
          <p class='text-center p-2 mb-3 bg-green-500 text-white'>{msg}</p>
        )}
        <div class='space-y-8'>
          <input
            type='email'
            //class='px-3 text-lg h-10 w-full border-gray-300 border-2 rounded'
            placeholder='Enter Your Email'
            name='email'
            value={email}
            onChange={setVal}
          ></input>
          <input
            type='submit'
            value='Send Link'
            // class='bg-gray-500 w-full py-3 text-white rounded'
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
