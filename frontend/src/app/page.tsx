'use client';
import { FormEventHandler, useCallback } from 'react';

import styles from './page.module.css';

import { axiosClient } from '@/libs/axios';

const Home = () => {
  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      password: formData.get('password'),
      email: formData.get('email'),
    };
    axiosClient.post('/auth', data);
  }, []);

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Home;
