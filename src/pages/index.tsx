import * as React from 'react';
import {Box} from '@mui/material';
import DashboardAppBar from "@/components/molecules/DashboardAppBar/DashboardAppBar";
import Login from "@/components/molecules/Login/Login";
import Sidebar from "@/components/organisms/Sidebar";
import ListMenu from '@/components/atoms/AccordionMenu/ListMenu';
import Sidebar1 from '@/components/organisms/Sidebar1';


const Index = () => {
    return (
        <Box sx={{display:'flex'}}>
            <DashboardAppBar/>
            <Sidebar1 />
            <Login/>
        </Box>
    );
}

export default Index;
