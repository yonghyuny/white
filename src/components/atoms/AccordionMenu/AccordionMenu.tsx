import * as React from 'react';
import {AccordionDetails, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useRouter} from "next/router";
import SIZES from "@/styles/sizes";
import COLORS from "@/styles/colors";


export type AccordionMenuItem = {
    name: string;
    url: string;
}
export type AccordionMenuProps = {
    AccordionMenuItems: AccordionMenuItem[];
}


const AccordionMenu = ({AccordionMenuItems}: AccordionMenuProps) => {
    const router = useRouter()
    const moveToUrl = (url: string) => router.push(`/${url}`)
    return (
        <AccordionDetails sx={{padding: 0}}>
            <List sx={{padding: 0}}>
                {AccordionMenuItems?.map((value, index) => (
                    <ListItem key={value.name}
                              onClick={() => moveToUrl(value.url)}
                              sx={{
                                  borderBottom: 1, borderColor: 'divider', transition: "all 0.3s",
                                  '&:hover': {
                                      backgroundColor: COLORS.SECONDARY,
                                  }
                              }}
                    >
                        <ListItemButton>
                            <ListItemText primaryTypographyProps={{fontSize: SIZES.FONT_SIZE.EXTRA_LARGE}}
                                          primary={value.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
    );
}

export default AccordionMenu