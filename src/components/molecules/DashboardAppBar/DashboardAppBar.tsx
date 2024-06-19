import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Link } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SIZES from '@/styles/sizes';
import COLORS from '@/styles/colors';

const DashboardAppBar: React.FC = () => (
    <AppBar
        position="fixed"
        sx={{
            width: `calc(100% - ${SIZES.SIDEBAR_WIDTH.DEFAULT}px)`,
            ml: `${SIZES.SIDEBAR_WIDTH.DEFAULT}px`,
            backgroundColor: COLORS.PRIMARY,
        }}
    >
        <Toolbar>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                White Clinic 관리자
            </Typography>
            <Link href="/" color="inherit" underline="none">
                <IconButton color="inherit">
                    <HomeIcon />
                </IconButton>
            </Link>
            <Link href="/signup" color="inherit" underline="none">
                <IconButton color="inherit">
                    <PersonAddIcon />
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
);

export default DashboardAppBar;
