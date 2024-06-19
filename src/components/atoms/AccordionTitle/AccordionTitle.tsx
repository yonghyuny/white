import * as React from 'react';
import {AccordionSummary, Typography,} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";
import {SvgIconComponent} from "@mui/icons-material";


export type AccordionTitleProps = {
    AccordionTitle: string;
    Icon: SvgIconComponent;
}

const AccordionTitle = ({AccordionTitle, Icon}: AccordionTitleProps) => {
    return (
        <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE, color: COLORS.TEXT.PRIMARY}}/>}
            aria-controls="Sales-content"
            id="Sales-header"
            sx={{
                borderBottom: 1,
                borderColor: COLORS.BORDER.PRIMARY,
                display: "flex",
                alignItems: "center",
                transition: "all 0.3s",
                '&:hover': {
                    backgroundColor: COLORS.SECONDARY,
                },
                //todo 확장되면 글씨 커지도록
            }}
        >
            <Icon style={{marginRight: SIZES.SPACING.SMALL, fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_LARGE}}/>
            <Typography sx={{fontSize: SIZES.FONT_SIZE.EXTRA_LARGE}}>
                {AccordionTitle}</Typography>
        </AccordionSummary>
    );
}
export default AccordionTitle;