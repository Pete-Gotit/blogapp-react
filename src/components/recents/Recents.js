import React from 'react';
import postImage1 from '../../static/Image1.png'
import postImage2 from '../../static/Image2.jpeg'
import postImage3 from '../../static/Image3.jpeg'
import postImage4 from '../../static/Image4.webp'
import postImage5 from '../../static/Image5.jpeg'
import { Box, Grid } from "@mui/material";
import Card from '../card/Card';

const Recents = () => {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 1 }}>
                <Grid item>
                    <Card cardImage={postImage1} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card cardImage={postImage2} />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Card cardImage={postImage4} />
                </Grid>
                <Grid item md={6} xs={12} >
                    <Card cardImage={postImage3} />
                </Grid>
                <Grid item md={6} xs={12} >
                    <Card cardImage={postImage5} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Recents;