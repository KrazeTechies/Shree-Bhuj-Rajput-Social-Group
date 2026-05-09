import LocalShippingRounded from '@mui/icons-material/LocalShippingRounded'
import StarRounded from '@mui/icons-material/StarRounded'
import SupportAgentRounded from '@mui/icons-material/SupportAgentRounded'
import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import HeroImage from '../assets/hero.png'

const highlights = [
  { title: 'Fast Delivery', desc: 'Important updates and event details reach members quickly.', icon: <LocalShippingRounded /> },
  { title: 'Best Quality', desc: 'Well-organized events with strong cultural participation.', icon: <StarRounded /> },
  { title: '24/7 Support', desc: 'A connected team to help families and volunteers anytime.', icon: <SupportAgentRounded /> },
]

const products = [
  { name: 'Traditional Gathering', price: '80', image: HeroImage },
  { name: 'Youth Leadership Camp', price: '65', image: HeroImage },
  { name: 'Family Connect Meet', price: '70', image: HeroImage },
  { name: 'Cultural Festival', price: '90', image: HeroImage },
  { name: 'Volunteer Program', price: '55', image: HeroImage },
  { name: 'Women Empowerment Drive', price: '75', image: HeroImage },
]

function HomePage() {
  return (
    <Stack spacing={{ xs: 7, md: 9 }}>
      <Box
        id="home"
        sx={{
          borderRadius: 1.5,
          overflow: 'hidden',
          background: '#f3f4f6',
          scrollMarginTop: { xs: 90, md: 120 },
        }}
      >
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ p: { xs: 3, md: 7 }, pt: { xs: 4, md: 9 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: '#002c3e',
                  fontSize: { xs: '2rem', md: '4.2rem' },
                  lineHeight: 1.05,
                  maxWidth: 520,
                }}
              >
                <Box component="span" sx={{ color: '#f7444e', display: 'block' }}>
                  Sale 20% Off
                </Box>
                On Everything
              </Typography>
              <Typography sx={{ color: '#4f6572', fontSize: { xs: '1rem', md: '1.04rem' }, maxWidth: 540, mt: 2.2 }}>
                Cultural programs, family events, youth activities, and social drives built for our community.
              </Typography>
              <Button variant="contained" size="large" sx={{ mt: 3, bgcolor: '#f7444e', borderRadius: 0, px: 4, '&:hover': { bgcolor: '#d83741' } }}>
                Shop Now
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={HeroImage}
              alt="Community Hero"
              sx={{
                width: '100%',
                height: '100%',
                minHeight: { xs: 260, md: 520 },
                objectFit: 'cover',
              }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box id="about" sx={{ scrollMarginTop: { xs: 90, md: 120 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 800, color: '#002c3e', fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 3.5 }}
        >
          Why Shop With <Box component="span" sx={{ color: '#f7444e' }}>Us</Box>
        </Typography>
        <Grid container spacing={2.5}>
          {highlights.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid #e4e9ee',
                  textAlign: 'center',
                  height: '100%',
                  bgcolor: '#fff',
                }}
              >
                <Avatar sx={{ mx: 'auto', mb: 1.5, bgcolor: '#f7444e', width: 54, height: 54 }}>{item.icon}</Avatar>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#002c3e' }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: '#5f7280', mt: 0.8 }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="products" sx={{ scrollMarginTop: { xs: 90, md: 120 } }}>
        <Typography
          variant="h4"
          textAlign="center"
          sx={{ fontWeight: 800, color: '#002c3e', fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 3.5 }}
        >
          Our <Box component="span" sx={{ color: '#f7444e' }}>Products</Box>
        </Typography>
        <Grid container spacing={2.5}>
          {products.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  borderRadius: 0.8,
                  border: '1px solid #e3eaef',
                  overflow: 'hidden',
                  bgcolor: '#f7f8fa',
                  height: '100%',
                }}
              >
                <Box component="img" src={item.image} alt={item.name} sx={{ width: '100%', height: 230, objectFit: 'cover' }} />
                <Stack spacing={1.2} sx={{ p: 2.2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#002c3e', fontSize: '1.06rem' }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ color: '#5f7280' }}>${item.price}</Typography>
                  <Button variant="contained" sx={{ bgcolor: '#f7444e', '&:hover': { bgcolor: '#d83741' } }}>
                    Buy Now
                  </Button>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Container
        id="blog"
        disableGutters
        sx={{
          px: { xs: 2.5, md: 6 },
          py: { xs: 5, md: 6 },
          borderRadius: 4,
          bgcolor: '#f7f8fa',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800, color: '#002c3e', mb: 2.2 }}>
          Customer's Testimonial
        </Typography>
        <Avatar src={HeroImage} alt="Customer" sx={{ mx: 'auto', width: 78, height: 78, mb: 1.4 }} />
        <Typography sx={{ mt: 1.2, color: '#5f7280', maxWidth: 760, mx: 'auto' }}>
          “Our family has grown closer to the community through SBRSG events. The organization, support, and warm
          environment are truly inspiring.”
        </Typography>
        <Typography sx={{ mt: 1.2, fontWeight: 700, color: '#002c3e' }}>Anna Trevor</Typography>
        <Typography sx={{ fontSize: '0.88rem', color: '#68808f' }}>Customer</Typography>
      </Container>

      <Container
        disableGutters
        sx={{
          px: { xs: 2.5, md: 5 },
          py: { xs: 4.5, md: 5.2 },
          borderRadius: 4,
          bgcolor: '#d4ced0',
          color: '#002c3e',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Subscribe To Get Discount Offers
        </Typography>
        <Typography sx={{ opacity: 0.9, mt: 1.1, mb: 2.1 }}>
          Get announcements for events, volunteering opportunities, and social activities
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} justifyContent="center" alignItems="center">
          <TextField
            size="small"
            placeholder="Enter your email"
            sx={{
              width: { xs: '100%', sm: 360 },
              bgcolor: '#fff',
              borderRadius: 8,
              '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#f7444e',
              '&:hover': { bgcolor: '#d83741' },
              px: 4,
              borderRadius: 8,
            }}
          >
            Subscribe
          </Button>
        </Stack>
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
          © 2026 All Rights Reserved By SBRSG
        </Typography>
      </Box>
    </Stack>
  )
}

export default HomePage
