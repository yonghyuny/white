import * as React from 'react';
import { URLS } from "@/styles/urls"
import LogoLink from "../atoms/LogoLink/LogoLink"
import MenuDrawer from "../atoms/MenuDrawer/MenuDrawer"
import { MESSAGES } from "@/styles/messages"
import ListMenuGroup from "../molecules/AccordionMenuGroup/ListMenuGroup"


const Sidebar1 = () => {
    return (
         <MenuDrawer variant="permanent" anchor="left">
       
            <LogoLink src={URLS.IMAGE.LOGO} href={URLS.BASE} alt={MESSAGES.ERRORS.NO_IMAGE} />
            <ListMenuGroup/>
            
         </MenuDrawer>
    );
};

export default Sidebar1;