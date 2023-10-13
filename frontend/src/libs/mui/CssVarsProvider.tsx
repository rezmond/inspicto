'use client';
import { Experimental_CssVarsProvider } from '@mui/material/styles';
import { type ComponentProps, FC } from 'react';

import { GlobalStyles } from './GlobalStyles';
import { type Theme } from './theme';

type OriginalCssVarsProviderProps = ComponentProps<
  typeof Experimental_CssVarsProvider
>;
type CssVarsProviderProps = OriginalCssVarsProviderProps & {
  theme: Theme;
};

export const CssVarsProvider: FC<CssVarsProviderProps> = ({
  children,
  theme,
  ...props
}) => (
  <Experimental_CssVarsProvider theme={theme} {...props}>
    <GlobalStyles
      styles={{
        ':root': {
          '--spacing': theme.spacing(1),
        },
      }}
    />
    {children}
  </Experimental_CssVarsProvider>
);
