import React from 'react';
import Typography from '@mui/material/Typography';
import { Wrapper } from './style';
import { Box } from '@mui/material';

export function AppPage() {
    return(
        <Wrapper>
             <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h2" component="div" gutterBottom className='app-header'>
                    Weather App
                </Typography>
             </Box>
        </Wrapper>
    )
}