import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import student from './Registry.module.css';
import { TextField, FormControl, Input, InputLabel, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { request } from "../../http/http";

const Registry = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    pwd: '',
  });

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const changeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={student['student']}>
      <div className={student['content']}>
        <div className={student['mycontain']}>
          <div className={student['block-logo-student']}>
            <h2>Create your account</h2>
          </div>
          <div className={student['block-student']}>
            <TextField variant="standard" name="username" onChange={changeForm} label="Username" />
            <TextField variant="standard" name="email" onChange={changeForm} label="Email" />
            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                name="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div className={student['block-bottom']}>
            <div
              onClick={async () => {
                try {
                  console.log(form);
                  // const fetched = await request('/user/register', 'POST', form); 
                  navigate('/todo');
                } catch (e) {
                  alert(e.message)
                }
              }}
            >
              <Button variant="contained">Next</Button>
            </div>
          </div>
          <p className={student['mycontain--log']}>
            Already have an account?
            <Link to={'/login'} className={student['reg-link']}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registry;
