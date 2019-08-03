// Imports
import React, { useState, useEffect } from 'react';
import { Form, Alert, FormGroup, }    from 'reactstrap';
import { Button, InputAdornment }     from '@material-ui/core';
import { IoMdPerson, IoMdKey }        from 'react-icons/io';
import { fieldValidator }             from 'helpers/fieldValidator';
import { TextField as Input }         from '@material-ui/core';
import { makeStyles }                 from '@material-ui/core/styles';
import { login }                      from 'services/auth';
import styled                         from 'styled-components';
import history                        from 'helpers/history';

// Styles
const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  height: 350px;
  width: 400px;
  background: #ffffff;
  border-radius: 5px;
  padding: 20px;
`;

const Brand = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  color: #57606f;
  text-align: center;
  margin-bottom: 10px;
`;

export const stylePrimary = {
  background: '#2980b9',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  outline: 'none',
  width: '100%',
  height: '40px',
  margin: '0',
  textTransform: 'capitalize',
  backgroundImage: 'linear-gradient(to right, #6190E8 100%, #A7BFE8 100%, #6190E8 100%)',
};

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

// Main
export default function Main() {

  // MUI
  const classes = useStyles();

  /**
   * States
   */
  const [user, setUser]         = useState({ username: '', password: '' });
  const [error, setError]       = useState({ field: '' });
  const [alert, setAlert]       = useState({ type: '', status: false, message: ''});
  const [submited, setSubmited] = useState(false);

  /**
   * Functions
   */
  
  // Validate Fields
  const validateFields = () => {
    let result = fieldValidator(user);
    return result.status ? true : setError({ field: result.field});
  };

  // Login
  const handleLogin = e => {
    e.preventDefault();

    if(validateFields()) {

      setSubmited(true);

      if(user.username === 'dashmin' && user.password === '123') {
        login('0c33f93c0a3f8966148ad8e1da091b6fd6c6e857');
        history.push('/');

      } else {

        setAlert({
          type: 'warning',
          status: true,
          message: 'Invalid Credentials.',
        });

        setSubmited(false);

      }

    };
  };

  /**
   * Main
   */

  // Mount
  useEffect(() => {
    document.title = 'Login';

    if(alert) {
      window.formAlert = setTimeout(() => {
        setAlert({
          type: '',
          status: false,
          message: '',
        });
      }, 6000);
    }

  }, [alert]);

  // Unmount
  useEffect(() => {
    return () => {
      document.title = '';

      if (window.formAlert) {
        clearTimeout(window.formAlert);
      }
    }
  }, []);

  return (
    <Wrapper>
      <Box>
        <Form onSubmit={e => handleLogin(e)} noValidate autoComplete="off">
          <Brand> Dashmin </Brand>

          <Alert isOpen={alert.status} color={alert.type} style={{ transition: 'all .5s', marginBottom: '0' }}>{alert.message}</Alert>

          <FormGroup>
              <Input
                label="Usúario:"
                type="text"
                name="username"
                margin="normal"
                fullWidth={true}
                variant="outlined"
                placeholder="usúario"
                onChange={e => setUser({ ...user, username: e.target.value })}
                error={error.field === 'username' && !user.username ? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoMdPerson size={22} style={{ color: '#57606f' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Senha:"
                type="password"
                name="password"
                placeholder="********"
                margin="normal"
                fullWidth={true}
                variant="outlined"
                onChange={e => setUser({ ...user, password: e.target.value })}
                error={error.field === 'password' && !user.password ? true : false}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoMdKey size={22} style={{ color: '#57606f' }} />
                    </InputAdornment>
                  ),
                }}
              />
            </FormGroup>
            <Button
              variant="contained"
              size="medium"
              style={stylePrimary}
              className={classes.margin}
              type="submit"
              disabled={submited}
            >
              Acessar
          </Button>
        </Form>
      </Box>
    </Wrapper>
  )
}
