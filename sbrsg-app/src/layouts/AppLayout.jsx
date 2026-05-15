import {
  Box,
  Container,
  Link,
  Stack,
  Typography,
  Grid,
  Button
} from '@mui/material'
import { Link as RouterLink, Outlet } from 'react-router-dom'
import Logo from '../assets/Logo.png'

const navItems = [
  { label: 'Home', to: '/#home' },
  { label: 'Gallery', to: '/gallery' },
  // { label: 'About', to: '/#products' },
  // { label: 'Suggestion Box', to: '/#blog' },
  { label: 'Contact', to: '/contact' },
]

function AppLayout() {
  return (
    <Box sx={{ minHeight: '100dvh', bgcolor: '#ffffff', scrollBehavior: 'smooth' }}>
      {/* <Box sx={{ bgcolor: '#f7444e', color: '#fff', py: 1 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="space-between" alignItems="center">
            <Typography sx={{ fontSize: { xs: '0.78rem', md: '0.9rem' }, fontWeight: 500 }}>
              Phone: +91 9427250955
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.78rem', md: '0.9rem' }, fontWeight: 500 }}>
              Email: rajput.social.group@gmail.com
            </Typography>
          </Stack>
        </Container>
      </Box> */}

      <Box sx={{ borderBottom: '1px solid', borderColor: 'divider', bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1.2, md: 2 }}
            sx={{
              py: { xs: 1.1, md: 1.5 },
              alignItems: { xs: 'center', md: 'center' },
              justifyContent: { xs: 'center', md: 'space-between' },
            }}
          >
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Box
                component="img"
                src={Logo}
                alt="SBRSG Logo"
                sx={{ width: 125, height: 125, objectFit: 'contain' }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: 'darkslateblue',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  textAlign: 'center',
                }}
              >
                Shree Bhuj Rajput Social Group
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 1.2, md: 2.2 }}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-end' }}
              flexWrap="wrap"
              sx={{ rowGap: 1, width: { xs: '100%', md: 'auto' } }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.to}
                  underline="none"
                  sx={{
                    color: '#002c3e',
                    fontWeight: item.label === 'Home' ? 700 : 600,
                    fontSize: '0.96rem',
                    '&:hover': { color: '#f7444e' },
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 10 } }}>
        <Outlet />
      </Container>

      <Box id="contact" sx={{ bgcolor: '#212529', color: '#d4dde1', borderRadius: 1.5, p: { xs: 3, md: 5 }, scrollMarginTop: { xs: 90, md: 120 } }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2, color: '#fff' }}>
              ADDRESS
            </Typography>
            <Typography>Bhuj, Kutch, Gujarat</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2, color: '#fff' }}>
              MENU
            </Typography>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Services</Typography>
            <Typography>Contact</Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2, color: '#fff' }}>
              NEWSLETTER
            </Typography>
            <Typography sx={{ mb: 1.1 }}>Subscribe by our newsletter and get updates.</Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: '#f7444e',
                '&:hover': { bgcolor: '#d83741' },
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 3.5, pt: 2, borderTop: '1px solid #343b40', textAlign: 'center', fontSize: '0.9rem' }}>
          © 2026 All Rights Reserved By Kraze Techies
        </Typography>
      </Box>
    </Box>
    
  )
}

export default AppLayout
