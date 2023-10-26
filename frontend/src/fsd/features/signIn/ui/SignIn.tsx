import type { FC } from 'react';

import { Button } from '@/shared/ui/Button';

type SignInProps = {
  children: string;
};

export const SignIn: FC<SignInProps> = ({ children }) => (
  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    {children}
  </Button>
);
