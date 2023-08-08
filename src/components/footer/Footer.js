import { Box, Stack, Typography, styled } from '@mui/material'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react'

const SocialBox = styled(Box)({
    display: 'flex',
    gap: 10,
    color:'white'
});


const Footer = () => {
    return (
        <Box sx={{ background: 'black', height: '300px' }}>
            <Stack direction={{ xs: 'row', md: 'row' }} p={7}>
                <Box flex={1}>
                    <Typography color={'red'} align={'center'} variant='h6'>
                       COMPANY
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        About Us
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Blog
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Contact Us
                    </Typography>
                </Box>
                <Box flex={1}>
                    <Typography color={'red'} align={'center'} variant='h6'>
                        MY ACCOUNT
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Sign In/ Register
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Subscribe
                    </Typography>
                </Box>
                <Box flex={1}>
                    <Typography color={'red'} align={'center'} variant='h6'>
                        LEGAL INFO
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Privacy Policy
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Terms & Conditions
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Cookie Policy
                    </Typography>
                </Box>
                <Box flex={1}>
                    <Typography color={'red'} align={'center'} variant='h6'>
                        CATEGORIES
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Kids
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Women
                    </Typography>
                    <Typography color={'white'} align={'center'}>
                        Men
                    </Typography>
                </Box>
                <Box>
                    <Typography color={'red'} align={'center'} variant='h6'>
                        FOLLOW US
                    </Typography>
                    <SocialBox>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                    </SocialBox>
                </Box>
            </Stack >
        </Box >
    )
}

export default Footer