import type { FC } from 'react';

import { Checkbox } from '@/shared/ui/Checkbox';
import { FormControlLabel } from '@/shared/ui/FormControlLabel';

type RememberMeProps = {
  label: string;
};

export const RememberMe: FC<RememberMeProps> = ({ label }) => (
  <FormControlLabel
    control={<Checkbox value="remember" color="primary" />}
    label={label}
  />
);
