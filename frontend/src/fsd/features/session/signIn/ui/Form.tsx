import type { FC, FormEventHandler } from 'react';

import { Box } from '@/shared/ui/Box';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { FormControlLabel } from '@/shared/ui/FormControlLabel';
import { Grid } from '@/shared/ui/Grid';
import { Link } from '@/shared/ui/Link';
import { TextField } from '@/shared/ui/TextField';

import { createAuthDto } from '../lib';
import { SignInDto } from '../types';

type SignInProps = {
  'aria-labelledby': string;
  onSubmit: (data: SignInDto) => void;
};

export const Form: FC<SignInProps> = ({
  'aria-labelledby': ariaLabelledBy,
  onSubmit,
}) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(createAuthDto(formData));
  };

  return (
    <Box
      component="form"
      aria-labelledby={ariaLabelledBy}
      onSubmit={handleSubmit}
      sx={{ mt: 1 }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};