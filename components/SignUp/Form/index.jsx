/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
import { useState, useEffect } from 'react';

import styles from './Form.module.scss';
import Button from './Button';
import Input from './Input';
import Terms from './Terms';
import TryIt from './TryIt';

export default function Form({ className }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};

    const regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
      form.email,
    );

    if (!regEmail) {
      err.regEmail = 'Please enter a valid email addresss';
    }

    const regPassword =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        form.password,
      );

    if (!regPassword) {
      err.regPassword = (
        <span>
          All passwords must have at least:
          <ul>
            <li>8 characters</li>
            <li>1 uppercase letter</li>
            <li>1 lowercase letter</li>
            <li>1 number</li>
            <li>1 special character</li>
          </ul>
        </span>
      );
    }

    if (!form.email) {
      err.email = 'Please enter an email address';
    }

    if (!form.firstName) {
      err.firstName = 'Please enter your first name';
    }

    if (!form.lastName) {
      err.lastName = 'Please enter your last name';
    }

    if (!form.password) {
      err.password = 'Please enter a password';
    }

    return err;
  };

  useEffect(() => {
    console.log(errors);
    if (loading) {
      if (Object.keys(errors).length === 0) {
        // success
      } else {
        setLoading(false);
      }
    }
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate());
    setLoading(true);
  };

  const inputs = [
    {
      placeholder: 'First Name',
      name: 'firstName',
      value: form.firstName,
      key: 1,
    },
    {
      placeholder: 'Last Name',
      name: 'lastName',
      value: form.lastName,
      key: 2,
    },
    {
      placeholder: 'Email Address',
      name: 'email',
      type: 'email',
      value: form.email,
      key: 3,
    },
    {
      placeholder: 'Password',
      name: 'password',
      type: 'password',
      value: form.password,
      key: 4,
    },
  ];

  return (
    <>
      <TryIt />
      <div
        className={`${styles.form} ${className}`}
        style={{
          height: errors && 'auto',
        }}
      >
        {inputs.map((input) => {
          const errorMessage = () => {
            if (input.name === 'email') {
              return errors.email || errors.regEmail;
            }
            if (input.name === 'password') {
              return errors.password || errors.regPassword;
            }
            return errors[input.name];
          };
          return (
            <Input
              key={input.key}
              placeholder={input.placeholder}
              name={input.name}
              type={input.type}
              value={input.value}
              handleChange={handleChange}
              errors={errors}
              errorMessage={errorMessage()}
            />
          );
        })}
        <Button onClick={handleSubmit}>claim your free trial</Button>
        <Terms className={styles.terms} />
      </div>
    </>
  );
}
