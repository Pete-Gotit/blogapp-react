import { Box, CardContent, CardMedia, Link, Typography } from '@mui/material'
import React from 'react'

const Card = ({ cardImage }) => {

    return (
        <Box>
            <Link href="http://localhost:3000/details" sx={{textDecoration:'none'}}>
            {" "}
                <CardMedia
                    component="img"
                    alt="blog image"
                    height="100%"
                    image={cardImage}
                />
                <CardContent>
                    <Typography
                        gutterBottom variant="body1"
                        align='center'
                        component="div"
                        color='tomato'>
                        BLOGGER
                    </Typography>
                    <Typography
                        gutterBottom variant="h5"
                        align='center'
                        component="div" >
                        Read about the latest fashion trend
                    </Typography>
                    <Typography
                        gutterBottom variant="body2"
                        align='center'
                        component="div"
                        color="text.secondary">
                        Make your fashion statement!
                    </Typography>
                    <Typography
                        variant="body2"
                        align='center'
                        color="text.secondary">
                        "Fashion you can buy, but style you possess. The key to style is learning who you are, which takes years.
                        There's no how-to road map to style. It's about self expression and, above all, attitude." —Iris Apfel
                    </Typography>
                </CardContent>
            </Link>
        </Box>
    )
}

export default Card