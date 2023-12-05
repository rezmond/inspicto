'use client';
import Link from 'next/link';
import { FC } from 'react';

import { getUserName, type User } from '@/entities/user';
import { AppBar } from '@/shared/ui/AppBar';
import { Button } from '@/shared/ui/Button';
import { Toolbar } from '@/shared/ui/ToolBar';
import { Typography } from '@/shared/ui/Typography';

import styles from './Header.module.css';

type HeaderProps = {
  user?: User;
};

export const Header: FC<HeaderProps> = ({ user }) => {
  const onLogon = () => {};
  const onLogout = () => {};
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        {user ? (
          <>
            <Typography>
              Welcome <b>{getUserName(user)}</b>
            </Typography>{' '}
            <Button color="inherit" onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              className={styles.firstHeaderCta}
              LinkComponent={Link}
              color="inherit"
              href="/auth/sign-in"
            >
              Sing in
            </Button>{' '}
            <Button color="inherit" onClick={onLogon}>
              Sign up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
