import React from 'react';
import { Divider, Typography } from '@mui/material';
import { HeaderProps } from '../../interfaces/interfaces';

const Header = ({ title }: HeaderProps) => (
    <nav>
        <Typography variant="h4">{title}</Typography>
        <Divider sx={{ margin: '40px 0' }} />
    </nav>
);

export default Header;
