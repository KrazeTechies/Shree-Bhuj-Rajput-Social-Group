import { useMemo, useState } from 'react'

import {
  Avatar,
  Box,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'

import CloseRounded from '@mui/icons-material/CloseRounded'
import PersonRounded from '@mui/icons-material/PersonRounded'
import SearchRounded from '@mui/icons-material/SearchRounded'

// Replace these image paths with your own images
import Photo1 from '../assets/donor/donor-1.jpeg'
import Photo2 from '../assets/donor/donor-2.jpeg'

const galleryPhotos = [
  {
    id: 1,
    name: 'Ashokbhai Laxmanbhai Mer',
    image: Photo1,
  },
  {
    id: 2,
    name: 'Abda Chandresh Pravinbhai',
    image: '',
  },
  {
    id: 3,
    name: 'Abda Vijaybhai Laljibhai',
    image: '',
  },
  {
    id: 4,
    name: 'Amar Ushaben Dineshbhai',
    image: '',
  },
  {
    id: 5,
    name: 'Barach Bharatsinh K.',
    image: '',
  },
  {
    id: 6,
    name: 'Batti Balvir Devjibhai',
    image: '',
  },
  {
    id: 7,
    name: 'Ghanshyamsinh Rathod',
    image: Photo2,
  },
  {
    id: 8,
    name: 'Chauhan Dineshbhai K.',
    image: '',
  },
]

function DonorPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [searchText, setSearchText] = useState('')

  const handleOpen = (photo) => {
    if (photo.image) {
      setSelectedPhoto(photo)
    }
  }

  const handleClose = () => {
    setSelectedPhoto(null)
  }

  const filteredPhotos = useMemo(() => {
    return galleryPhotos.filter((photo) =>
      photo.name.toLowerCase().includes(searchText.toLowerCase())
    )
  }, [searchText])

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='xl'>
        {/* Header + Search */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          {/* Left Side */}
          <Stack
            spacing={1.5}
            alignItems={{
              xs: 'center',
              md: 'flex-start',
            }}
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
          >
            <Typography
              variant='h3'
              fontWeight={800}
              sx={{
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.3rem',
                  md: '2.8rem',
                },
              }}
            >
              Donors' List
            </Typography>

            <Typography
              variant='body1'
              color='text.secondary'
              maxWidth='700px'
              sx={{
                fontSize: {
                  xs: '0.9rem',
                  md: '1rem',
                },
              }}
            >
              Meet our respected donors and supporters.
            </Typography>
          </Stack>

          {/* Right Side Search */}
          <Stack
            spacing={1}
            alignItems={{
              xs: 'center',
              md: 'flex-end',
            }}
            width={{
              xs: '100%',
              md: 'auto',
            }}
          >
            <TextField
              placeholder='Search donor...'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              size='small'
              sx={{
                width: {
                  xs: '100%',
                  sm: '320px',
                },
                backgroundColor: '#fff',
                borderRadius: '14px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '14px',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchRounded />
                  </InputAdornment>
                ),
              }}
            />

            {/* Show only when user searches */}
            {searchText.trim() !== '' && (
              <Typography
                variant='body2'
                color='text.secondary'
                sx={{
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                Total Results: {filteredPhotos.length}
              </Typography>
            )}
          </Stack>
        </Box>

        <Box
          sx={{
            mt: {
              xs: 5,
              md: 6,
            },
          }}
        >
          <Grid
            container
            spacing={{ xs: 2.5, md: 2 }}
            justifyContent='center'
          >
            {filteredPhotos.map((photo) => (
              <Grid
                key={photo.id}
                size={{
                  xs: 6,
                  sm: 4,
                  md: 12 / 7,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    cursor: photo.image ? 'pointer' : 'default',
                  }}
                  onClick={() => handleOpen(photo)}
                >
                  {photo.image ? (
                    <Avatar
                      src={photo.image}
                      alt={photo.name}
                      sx={{
                        width: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        height: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        border: '3px solid white',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.10)',
                        transition: '0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  ) : (
                    <Avatar
                      sx={{
                        width: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        height: {
                          xs: 72,
                          sm: 78,
                          md: 85,
                        },
                        backgroundColor: '#e2e8f0',
                        color: '#64748b',
                        border: '3px solid white',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.10)',
                      }}
                    >
                      <PersonRounded
                        sx={{
                          fontSize: {
                            xs: 34,
                            md: 42,
                          },
                        }}
                      />
                    </Avatar>
                  )}

                  <Typography
                    variant='body2'
                    fontWeight={700}
                    sx={{
                      mt: 1.5,
                      fontSize: {
                        xs: '0.78rem',
                        md: '0.82rem',
                      },
                      lineHeight: 1.35,
                      maxWidth: '120px',
                      minHeight: '40px',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {photo.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {filteredPhotos.length === 0 && searchText.trim() !== '' && (
            <Typography
              textAlign='center'
              color='text.secondary'
              mt={6}
            >
              No donors found.
            </Typography>
          )}
        </Box>
      </Container>

      <Dialog
        open={Boolean(selectedPhoto)}
        onClose={handleClose}
        maxWidth='md'
        fullWidth
      >
        <DialogContent
          sx={{
            p: 0,
            position: 'relative',
            backgroundColor: '#000',
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 10,
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.3)',
              },
            }}
          >
            <CloseRounded />
          </IconButton>

          {selectedPhoto && (
            <Box>
              <Box
                component='img'
                src={selectedPhoto.image}
                alt={selectedPhoto.name}
                sx={{
                  width: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  display: 'block',
                  backgroundColor: '#000',
                }}
              />

              <Typography
                variant='h6'
                textAlign='center'
                sx={{
                  py: 2,
                  color: '#fff',
                  fontWeight: 700,
                }}
              >
                {selectedPhoto.name}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default DonorPage