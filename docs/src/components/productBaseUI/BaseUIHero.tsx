import * as React from 'react';
import dynamic from 'next/dynamic';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Local imports
import HeroContainer from 'docs/src/layouts/HeroContainer';
import IconImage from 'docs/src/components/icon/IconImage';
import GradientText from 'docs/src/components/typography/GradientText';
import ROUTES from 'docs/src/route';
import GetStartedButtons2 from 'docs/src/components/home/GetStartedButtons2';
import Link from 'docs/src/modules/components/Link';

const BaseUIThemesDemo = dynamic(() => import('./BaseUIThemesDemo'), {
  ssr: false,
  loading: function Loading() {
    return (
      <Box
        sx={[
          (theme) => ({
            width: 338,
            height: 557,
            borderRadius: '12px',
            bgcolor: 'grey.100',
            ...theme.applyDarkStyles({
              bgcolor: 'primaryDark.800',
            }),
          }),
        ]}
      />
    );
  },
});

export default function BaseUIHero() {
  return (
    <HeroContainer
      linearGradient
      disableMobileHidden
      left={
        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, ml: { xl: '-40px' } }}>
          <Typography
            fontWeight="bold"
            variant="body2"
            sx={(theme) => ({
              color: 'primary.600',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: { xs: 'center', md: 'flex-start' },
              ...theme.applyDarkStyles({
                color: 'primary.300',
              }),
            })}
          >
            <IconImage width={28} height={28} name="product-core" />{' '}
            <Link href={ROUTES.productCore}>MUI Core</Link>{' '}
            <Typography component="span" variant="inherit" sx={{ color: 'divider' }}>
              /
            </Typography>
            <Typography component="span" variant="inherit" sx={{ color: 'text.primary' }}>
              Base UI
            </Typography>
          </Typography>

          <Typography
            variant="h1"
            sx={{
              my: 2,
              maxWidth: { xs: 500, md: 'unset' },
              minWidth: { lg: 650 },
              position: 'relative',
              zIndex: 1,
            }}
          >
            A <GradientText>blank canvas</GradientText> for <br />
            total flexibility
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
            Base UI gives you a set of foundational &quot;headless&quot; components that you can
            build with using any styling solution you choose—no need to override any default style
            engine or theme.
          </Typography>
          <GetStartedButtons2
            getStartedUrl={ROUTES.baseDocs}
            learnUrl={ROUTES.baseQuickstart}
            learnLabel="Learn Base UI"
            installation="npm install @mui/base"
          />
        </Box>
      }
      right={
        <Box
          sx={{
            position: 'relative',
            height: '100%',
            padding: '16px',
            display: 'flex',
            '& > div': { margin: 'auto' },
          }}
        >
          <BaseUIThemesDemo />
        </Box>
      }
    />
  );
}
