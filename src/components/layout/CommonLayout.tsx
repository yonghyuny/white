import * as React from 'react';
import {Box} from '@mui/material';
import DashboardAppBar from "@/components/molecules/DashboardAppBar/DashboardAppBar";
import Sidebar from "@/components/organisms/Sidebar";


type CommonLayoutProps = {
    children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
    return (
        <Box sx={{display:'flex', height: '100vh'}}>
            <DashboardAppBar />
            <Sidebar/>
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 ,mt: '64px' }}>
                {children}
            </Box>
        </Box>
    );
};

export default CommonLayout;
