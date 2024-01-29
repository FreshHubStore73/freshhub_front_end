import React from 'react';
import styles from './home.module.scss';
import { Typography } from '@mui/material';

const Home = () => {
    return (
        <Typography variant="h2_Oswald" sx={{ textAlign: 'center' }} component="h1">
            FreshHub | HomePage
        </Typography>
    );
};

export default Home;
