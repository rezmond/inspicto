'use client';
import { Header } from '@/widgets/header';

import { SignInForm } from '@/features/session';
import { Container } from '@/shared/ui/Container';
import { Typography } from '@/shared/ui/Typography';

const signInHeaderId = 'sign-in-header-id';

export const SignInPage = () => (
  <>
    <Header />
    <Container component="main" maxWidth="xs">
      <Typography id={signInHeaderId} component="h1" variant="h5">
        Sign in
      </Typography>
      <SignInForm aria-labelledby={signInHeaderId} />
    </Container>
  </>
);
