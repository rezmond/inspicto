'use client';
import { Header } from '@/widgets/header';

import { useStyles } from './styles';

export const Home = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.root}>
      <Header />
    </main>
  );
};
