import * as React from 'react';
import {Accordion} from '@mui/material';
import AccordionMenu, {AccordionMenuProps} from "@/components/atoms/AccordionMenu/AccordionMenu";
import AccordionTitle, {AccordionTitleProps} from "@/components/atoms/AccordionTitle/AccordionTitle";
import COLORS from "@/styles/colors";

export type AccordionMenuPanelProps = {
    AccordionMenuTitle: AccordionTitleProps;
    AccordionMenuItemList: AccordionMenuProps;
}


const AccordionMenuPanel = ({AccordionMenuItemList, AccordionMenuTitle}: AccordionMenuPanelProps) => {
    const expandedStyled = {
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.TEXT.PRIMARY,
        '&.Mui-expanded': {
            margin: 0,
            backgroundColor:COLORS.PRIMARY
        },
    }

    return (
        <Accordion
            sx={expandedStyled}
        >
            <AccordionTitle {...AccordionMenuTitle} />
            <AccordionMenu {...AccordionMenuItemList} />
        </Accordion>
    );
}

export default AccordionMenuPanel;
