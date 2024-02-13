import { type FC, type FormEventHandler } from 'react';

import { Box } from '@/shared/ui/Box';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { CircularProgress } from '@/shared/ui/CircularProgress';
import { FormControlLabel } from '@/shared/ui/FormControlLabel';
import { Grid } from '@/shared/ui/Grid';
import { Link } from '@/shared/ui/Link';
import { TextField } from '@/shared/ui/TextField';
import { useSession } from '../../model';

type SignUpFormProps = {
  'aria-labelledby': string;
};

export const SignUpForm: FC<SignUpFormProps> = ({
  'aria-labelledby': ariaLabelledBy,
}) => {
  const sessionService = useSession();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // TODO: add validation through some library?
    const formData = new FormData(e.currentTarget);
    sessionService.signUp({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
    });
  };

  return (
    <Box
      component="form"
      noValidate
      aria-labelledby={ariaLabelledBy}
      onSubmit={handleSubmit}
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="last-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        {sessionService.isUserLoading ? <CircularProgress /> : 'Sign Up'}
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href="/auth/sign-in" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
