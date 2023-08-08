import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import detailsImage from "../../static/menImage.jpeg"
import cardImage from "../../static/Image1.png"
import Rightbar from '../rightbar/Rightbar';



const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: "250px",
        }}
      >
        <Typography
          align='center'
          color={'white'}
          variant='h2'
          sx={{ fontWeight: 900, padding: 10 }}
        >
          When Fashion Meets Passion
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: '18px 100px 100px 100px' }}>
            <Typography
              m={4}
              align='center'
              color={'gray'}
              variant='body1'
              sx={{ fontWeight: 900 }}
            >
              Summer Chic: Embrace the Sun in Style
            </Typography>

            <CardMedia
              component="img"
              alt="blog image"
              height="80%"
              image={cardImage}
            />
            <Typography align='center' variant='h4' mt={2}>
              Wait for it
            </Typography>
            <Typography
              m={4}
              color={'gray'}
              variant='body1'
              sx={{ fontWeight: 900 }}
            >
              Don't forget to experiment with playful patterns and floral prints that epitomize the essence of the season.
            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box >
  );
};

export default Details;