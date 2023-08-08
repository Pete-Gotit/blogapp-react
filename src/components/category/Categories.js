import React from 'react'
import { Box, Stack, styled, Typography } from '@mui/material'
import kidsImage from "../../static/kidsImage.jpeg";
import womenImage from "../../static/womenImage.jpeg";
import menImage from "../../static/menImage.jpeg";

const StyledBox=styled(Box)({
    height:200,
    width:'100%',
    cursor:'pointer',
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center',
    backgroundSize:'cover',
});

const StyledTypography=styled(Typography)({
    margin:'25% 50px 25% 50px',
    background:'white',
    opacity:'0.8',
})
const Categories = () => {
    return (
        <Box>
            <Stack direction={{xs:'column', sm:'row'}} spacing={{xs:1, sm:2, md:4}} mt={5}>
                <StyledBox sx={{backgroundImage: `url(${kidsImage})`}}><StyledTypography align='center' variant='h3'> Kids</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage: `url(${menImage})`}}><StyledTypography align='center' variant='h3'> Men</StyledTypography></StyledBox>
                <StyledBox sx={{backgroundImage: `url(${womenImage})`}}><StyledTypography align='center' variant='h3'> Women</StyledTypography></StyledBox>
            </Stack>
        </Box>
    )
}
  
export default Categories