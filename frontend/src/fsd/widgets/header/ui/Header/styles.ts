import { tss } from '@/shared/lib/tss';

export const useStyles = tss.create(({ theme }) => ({
  toolbar: {
    gap: theme.spacing(1),
  },
  firstHeaderCta: {
    marginInlineStart: 'auto',
  },
}));
