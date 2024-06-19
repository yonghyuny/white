// src/components/organisms/StyledDrawer.tsx
import React, {ReactNode} from 'react';
import Drawer from '@mui/material/Drawer';
import COLORS from '@/styles/colors';
import SIZES from '@/styles/sizes';


type DrawerProps = {
    children: ReactNode;
};

const MenuDrawer: React.FC<DrawerProps> = (props) => {

    return (
        <Drawer
            sx={{
                width: 300,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300,
                    boxSizing: 'border-box',
                    backgroundColor: COLORS.PRIMARY,
                    color: COLORS.TEXT.PRIMARY,
                    '&::-webkit-scrollbar': {
                        width: SIZES.SCROLL_WIDTH.DEFAULT,
                    },
                    '&::-webkit-scrollbar-track': {
                        background: COLORS.WHITE,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: COLORS.THIRD,
                        borderRadius: SIZES.BORDER_RADIUS.SMALL,
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#555',
                    },
                },
            }}
            variant="permanent"
            anchor="left"
            {...props}
        >
            {props.children}
        </Drawer>
    );
};

export default MenuDrawer;
