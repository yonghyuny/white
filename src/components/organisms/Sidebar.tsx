import * as React from 'react';
import AccordionMenuGroup from "@/components/molecules/AccordionMenuGroup/AccordionMenuGroup";
import LogoLink from "@/components/atoms/LogoLink/LogoLink";
import {URLS} from "@/styles/urls";
import {MESSAGES} from "@/styles/messages";
import MenuDrawer from "@/components/atoms/MenuDrawer/MenuDrawer";


const Sidebar = () => {
    return (
        <MenuDrawer variant="permanent" anchor="left">
            <LogoLink src={URLS.IMAGE.LOGO} href={URLS.BASE} alt={MESSAGES.ERRORS.NO_IMAGE}/>
            <AccordionMenuGroup/>
        </MenuDrawer>
    );
};

export default Sidebar;
