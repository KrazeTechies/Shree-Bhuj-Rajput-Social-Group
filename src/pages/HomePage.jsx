import PersonRounded from '@mui/icons-material/PersonRounded'
import VolunteerActivismRounded from '@mui/icons-material/VolunteerActivismRounded'
import GroupsRounded from '@mui/icons-material/GroupsRounded'
import RocketLaunchRounded from '@mui/icons-material/RocketLaunchRounded'

import {
  Avatar,
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material'

import AboutUs from '../assets/aboutUs.png'
import heroImage from '../assets/bhuj_image.jpg'

import member1 from '../assets/team/member-1.jpeg'
import member2 from '../assets/team/member-2.jpeg'

const highlights = [
  {
    title: 'સમાજ સેવા દ્વારા બદલાવ લાવવાની તક',
    desc: 'શિક્ષણ, આરોગ્ય અને જરૂરિયાતમંદ લોકોની સહાય દ્વારા સમાજમાં સકારાત્મક પરિવર્તન લાવવાની તક મળે છે.',
    icon: <VolunteerActivismRounded />,
  },
  {
    title: 'એકતા અને સહકારનું મજબૂત મંચ',
    desc: 'સમાજના લોકો સાથે જોડાઈને પરસ્પર સહકાર, વિશ્વાસ અને ભાઈચારો વધારવાનો અવસર મળે છે.',
    icon: <GroupsRounded />,
  },
  {
    title: 'આગામી પેઢી માટે ઉત્તમ ભવિષ્ય',
    desc: 'વિદ્યાર્થીઓને શિક્ષણ સહાય, આરોગ્ય સહાય અને સામાજિક માર્ગદર્શન દ્વારા ઉજ્જવળ ભવિષ્ય બનાવવામાં યોગદાન આપી શકાય છે.',
    icon: <RocketLaunchRounded />,
  },
]

const announcements = [
  'તલાટી તથા ટેટ ના ચોપડા સમાજ ના કોઈ પણ વિદ્યાર્થી કે વિદ્યાર્થીની ને જરૂરિયાત હોય તો સોશ્યલ ગ્રૂપ ની ઓફીસ પર થી લઈ જવા વિનંતી.(આ ચોપડા વિનામુલ્યે આપવામા આવશે)',

  'ધોરણ ૯ ના ચોપડા સમાજ ના કોઈ પણ વિદ્યાર્થી કે વિદ્યાર્થીની ને જરૂરિયાત હોય તો સોશ્યલ ગ્રૂપ ની ઓફીસ પર થી લઈ જવા વિનંતી.(આ ચોપડા વિનામુલ્યે આપવામા આવશે)',
]

const teamMembers = [
  {
    name: 'અશોકભાઈ મેર',
    image: member1,
  },
  {
    name: 'ઘનશ્યામસિંહ રાઠોડ',
    image: member2,
  },
  {
    name: 'Person 1',
    image: '',
  },
  {
    name: 'Person 2',
    image: '',
  },
  {
    name: 'Person 3',
    image: '',
  },
]

function HomePage() {
  return (
    <>
      {/* ANNOUNCEMENT ANIMATION */}
      <style>
        {`
          @keyframes scrollAnnouncements {
            0% {
              transform: translateY(0%);
            }

            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>

      <Stack spacing={{ xs: 7, md: 9 }}>
        {/* MAIN HERO SECTION */}
        <Box
          id="home"
          sx={{
            overflow: 'hidden',
            background: '#f3f4f6',
            scrollMarginTop: { xs: 90, md: 120 },
          }}
        >
          {/* HERO IMAGE */}
          <Box sx={{ bgcolor: '#0b172a' }}>
            <Container
              maxWidth={false}
              disableGutters
              sx={{
                px: 0,
                py: 0,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: 210, sm: 320, md: 430 },
                  borderRadius: 0,
                  overflow: 'hidden',
                  boxShadow: 'none',
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Community celebration event"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />

                {/* OVERLAY */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.08))',
                  }}
                />
              </Box>
            </Container>
          </Box>

          {/* ANNOUNCEMENTS + ABOUT */}
          <Grid container spacing={0}>
            {/* LEFT ANNOUNCEMENT PANEL */}
            <Grid size={{ xs: 12, md: 3 }}>
              <Box
                sx={{
                  bgcolor: '#0b172a',
                  color: '#fff',
                  minHeight: { xs: 320, md: 520 },
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    py: 2,
                    fontWeight: 800,
                    bgcolor: '#08111f',
                    borderBottom:
                      '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  Announcements
                </Typography>

                <Box
                  sx={{
                    height: 'calc(100% - 70px)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Stack
                    spacing={2}
                    sx={{
                      p: 2,
                      animation:
                        'scrollAnnouncements 15s linear infinite',
                      '&:hover': {
                        animationPlayState: 'paused',
                      },
                    }}
                  >
                    {[...announcements, ...announcements].map(
                      (item, index) => (
                        <Box
                          key={index}
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.08)',
                            border:
                              '1px solid rgba(255,255,255,0.08)',
                            backdropFilter: 'blur(4px)',
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: '0.95rem',
                              lineHeight: 1.7,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      )
                    )}
                  </Stack>
                </Box>
              </Box>
            </Grid>

            {/* RIGHT ABOUT SECTION */}
            <Grid size={{ xs: 12, md: 9 }}>
              <Grid container spacing={0}>
                {/* ABOUT TEXT */}
                <Grid size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      p: { xs: 3, md: 7 },
                      pt: { xs: 4, md: 9 },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: 800,
                        color: '#002c3e',
                        fontSize: {
                          xs: '2rem',
                          md: '4rem',
                        },
                        lineHeight: 1.05,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: '#f7444e',
                          display: 'block',
                        }}
                      >
                        About Us
                      </Box>
                    </Typography>

                    <Typography
                      sx={{
                        color: '#4f6572',
                        fontSize: {
                          xs: '1rem',
                          md: '1.04rem',
                        },
                        maxWidth: 540,
                        mt: 2.5,
                        lineHeight: 1.9,
                      }}
                    >
                      શ્રી ભૂજ રાજપૂત સોશ્યલ ગ્રુપ સમાજના
                      આર્થીક નબળા પરિવારો ને શૈક્ષણિક,
                      આરોગ્ય કે અન્ય બાબતોને લગતી
                      જરૂરિયાતો માટે મદદરૂપ થવા બનાવવામાં
                      આવેલ છે. આ ગ્રૂપ દ્વારા યથાશક્તિ
                      મુજબ મદદરૂપ થવાનું પ્રયાસ કરવાં
                      આવશે....
                    </Typography>
                  </Box>
                </Grid>

                {/* ABOUT IMAGE */}
                <Grid size={{ xs: 12, md: 5 }}>
                  <Box
                    component="img"
                    src={AboutUs}
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
            </Grid>
          </Grid>

          {/* OUR TEAM SECTION */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              py: { xs: 5, md: 8 },
              px: 2,
              bgcolor: '#f3f4f6',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '1200px',
                bgcolor: '#ffffff',
                borderRadius: 4,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                p: { xs: 3, md: 6 },
                textAlign: 'center',
              }}
            >
              {/* TEAM TITLE */}
              <Typography
                variant="h4"
                textAlign="center"
                sx={{
                  fontWeight: 800,
                  color: '#002c3e',
                  mb: 5,
                  fontSize: {
                    xs: '1.8rem',
                    md: '2.5rem',
                  },
                }}
              >
                OUR{' '}
                <Box
                  component="span"
                  sx={{ color: '#f7444e' }}
                >
                  TEAM
                </Box>
              </Typography>

              {/* TEAM MEMBERS */}
              <Grid
                container
                spacing={4}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {teamMembers.map((member) => (
                  <Grid
                    key={member.name}
                    size={{ xs: 6, sm: 4, md: 3 }}
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                      }}
                    >
                      <Avatar
                        src={member.image || undefined}
                        alt={member.name}
                        sx={{
                          width: {
                            xs: 110,
                            md: 140,
                          },
                          height: {
                            xs: 110,
                            md: 140,
                          },
                          mb: 2,
                          border: '4px solid #f7444e',
                          boxShadow:
                            '0 8px 20px rgba(0,0,0,0.12)',
                          bgcolor: '#f1f5f9',
                          color: '#64748b',
                        }}
                      >
                        {!member.image && (
                          <PersonRounded
                            sx={{
                              fontSize: '4rem',
                            }}
                          />
                        )}
                      </Avatar>

                      <Typography
                        variant="h6"
                        textAlign="center"
                        sx={{
                          fontWeight: 700,
                          color: '#002c3e',
                          fontSize: {
                            xs: '1rem',
                            md: '1.1rem',
                          },
                        }}
                      >
                        {member.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>

        {/* HIGHLIGHTS SECTION */}
        <Box
          id="about"
          sx={{
            scrollMarginTop: { xs: 90, md: 120 },
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              fontWeight: 800,
              color: '#002c3e',
              fontSize: {
                xs: '1.6rem',
                md: '2.2rem',
              },
              mb: 3.5,
            }}
          >
            શા માટે જોડાશો{' '}
            <Box
              component="span"
              sx={{ color: '#f7444e' }}
            >
              શ્રી ભુજ રાજપૂત સોશ્યલ ગ્રુપ માં?
            </Box>
          </Typography>

          <Grid container spacing={2.5}>
            {highlights.map((item) => (
              <Grid
                key={item.title}
                size={{ xs: 12, md: 4 }}
              >
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
                  <Avatar
                    sx={{
                      mx: 'auto',
                      mb: 1.5,
                      bgcolor: '#f7444e',
                      width: 54,
                      height: 54,
                    }}
                  >
                    {item.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: '#002c3e',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#5f7280',
                      mt: 0.8,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  )
}

export default HomePage
