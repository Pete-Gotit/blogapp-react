import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Card from '../card/Card';
import postImage1 from '../../static/Image1.png'
import postImage2 from '../../static/Image2.jpeg'
import postImage3 from '../../static/Image3.jpeg'

import React from 'react'

const Rightbar = () => {
    return (
        <Box>
            <Typography align='center' bgcolor={'black'} color='white'>
                Most Popular
            </Typography>
            <List sx={{
                width: '100%',
                height: "100 %",
                maxWidth: 360,
                bgcolor: 'background.paper'
            }}
            >
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar
                            sx={{ height: 80, width: 80 }}
                            variant='square'
                            alt="Remy Sharp"
                            src={postImage1}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — I'll be in your neighborhood doing errands this…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar
                            sx={{ height: 80, width: 80 }}
                            variant='square'
                            alt="Remy Sharp"
                            src={postImage2}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — Who says comfort can't be fashionable…"}
                    />
                </ListItem>
                <ListItem alignItems="flex-end">
                    <ListItemAvatar>
                        <Avatar
                            sx={{ height: 80, width: 80 }}
                            variant='square'
                            alt="Remy Sharp"
                            src={postImage3}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={" — When the sun sets, it's time to turn up the glam factor and dazzle the night away…"}
                    />
                </ListItem>
                <Divider variant='inset' component={'li'} />
            </List>
            <Typography align='center' bgcolor={'black'} color='white'>
                About Us
            </Typography>
            <Card cardImage={postImage1} />
        </Box>
    );
};

export default Rightbar;