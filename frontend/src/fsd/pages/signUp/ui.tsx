'use client';
import { Header } from '@/widgets/header';
import { Layout } from '@/widgets/layout';
import { SignUpForm } from '@/features/session';
import { Container } from '@/shared/ui/Container';
import { Typography } from '@/shared/ui/Typography';

const signUpHeaderId = 'sign-up-header-id';

export const SignUpPage = () => (
  <Layout header={<Header />}>
    <Container component="main" maxWidth="xs">
      <Typography id={signUpHeaderId} component="h1" variant="h5">
        Sign up
      </Typography>
      <SignUpForm aria-labelledby={signUpHeaderId} />
    </Container>
  </Layout>
);
