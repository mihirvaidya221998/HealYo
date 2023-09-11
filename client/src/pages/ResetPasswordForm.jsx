import React, { useEffect, useState } from 'react';
import '../styles/RegiserStyles.css';
import { Form, Input, message } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import { showLoading, hideLoading } from '../redux/features/alertSlice';
const baseUrl = 'http://localhost:8080/api/v1/user';
const ResetPasswordForm = () => {
  const location = useLocation();
  const history = useNavigate();
  console.log(location);
  const [invalidUser, setInvalidUser] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(true);
  const [success, setSuccess] = useState(false);

  const [newPassword, setNewPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const { token, id } = queryString.parse(location.search);
  console.log(`token: ${token}`);
  console.log(`id: ${id}`);
  const verifyToken = async () => {
    try {
      setBusy(false);
      const { data } = await axios.get(
        `${baseUrl}/verify-token?token=${token}&id=${id}`
      );
      console.log(`data: ${data}`);
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setInvalidUser(data.message);
        return console.log(
          `error.response: ${JSON.stringify(error.response.data, null, 2)}`
        );
        // const {data} = error.response;
        // if(!data.success){
        //   return setInvalidUser(data.error)
        // }
        // return console.log(error.response.data);
      }
      console.log(error);
    }
  };
  useEffect(() => {
    verifyToken();
  }, []);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    console.log(`name: ${name}`);
    console.log(`value: ${value}`);

    console.log(setNewPassword({ ...newPassword, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = newPassword;
    console.log(`Inside handleSubmit password: ${password}`);
    console.log(`Inside handleSubmit confirmPassword: ${confirmPassword}`);
    if (password !== confirmPassword) {
      return setError('Password does not match!');
    }
    try {
      setBusy(true);
      const { data } = await axios.post(
        `${baseUrl}/reset-password?token=${token}&id=${id}`,
        { password }
      );
      setBusy(false);
      console.log(`data: ${data}`);

      if (data.success) {
        setSuccess(true);
        history('/login');
      }
    } catch (error) {
      setBusy(false);
      if (error?.response?.data) {
        const { data } = error.response;
        if (!data.success) return setError(data.message);
        return console.log(
          `error.response: ${JSON.stringify(error.response.data, null, 2)}`
        );
        // const {data} = error.response;
        // if(!data.success){
        //   return setInvalidUser(data.error)
        // }
        // return console.log(error.response.data);
      }
      console.log(error);
    }
  };
  if (success)
    return (
      <div class='max-w-screen-sm m-auto pt-40'>
        <h1 class='text-center text-3xl text-gray-500 mb-3'>
          Password Reset Successful
        </h1>
      </div>
    );

  if (busy)
    return (
      <div class='max-w-screen-sm m-auto pt-40'>
        <h1 class='text-center text-3xl text-gray-500 mb-3'>
          Wait For a Moment Verifying Reset Token
        </h1>
      </div>
    );
  if (invalidUser)
    return (
      <div class='max-w-screen-sm m-auto pt-40'>
        <h1 class='text-center text-3xl text-gray-500 mb-3'>{invalidUser}</h1>
      </div>
    );
  return (
    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         HEALYO
    //       </a>
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarNav"
    //         aria-controls="navbarNav"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a className="nav-link" href="/">
    //               Home
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/about">
    //               About
    //             </a>
    //           </li>
    //         </ul>
    //         <button className="btn btn-outline-success" type="submit">
    //           Chat
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    //   <div className="form-container ">
    //     <Form
    //       layout="vertical"
    //       onFinish={handleSubmit}
    //       className="register-form"
    //     >
    //       <h3 className="text-center">Reset Password From</h3>

    //       {error && <p class="text-center p-2 mb-3 bg-red-500 text-white">{error}</p>}
    //       <Form.Item label="New Password" name="password">
    //         <Input type="password" required name='password' onChange={handleOnChange}/>
    //       </Form.Item>
    //       <Form.Item label="Retype New Password" name="confirmPassword">
    //         <Input type="password" required name='confirmPassword' onChange={handleOnChange}/>
    //       </Form.Item>
    //       <button className="btn btn-primary" type="submit">
    //         Submit
    //       </button>
    //     </Form>
    //   </div>
    // </div>

    <div class='max-w-screen-sm m-auto pt-40'>
      <h1 class='text-center text-3xl text-gray-500 mb-3'>Reset Password</h1>
      <form onSubmit={handleSubmit} class='shadow w-full rounded-lg p-10'>
        {error && (
          <p class='text-center p-2 mb-3 bg-red-500 text-white'>{error}</p>
        )}
        <div class='space-y-8'>
          <input
            type='password'
            class='px-3 text-lg h-10 w-full border-gray-300 border-2 rounded'
            placeholder='New Password'
            name='password'
            onChange={handleOnChange}
          ></input>
          <input
            type='password'
            class='px-3 text-lg h-10 w-full border-gray-300 border-2 rounded'
            placeholder='Retype New Password'
            name='confirmPassword'
            onChange={handleOnChange}
          ></input>
          <input
            type='submit'
            value='Reset Password'
            class='bg-gray-500 w-full py-3 text-white rounded'
          ></input>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
