import COLORS from "@/styles/colors";
import { ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, colors } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export type ListMenuPanelProps = {
    ListMenuTitle: string;
    ListMenuItemList: { name: string; url: string; icon: React.ReactNode }[];
  };
  
  const ListMenuPanel = ({ ListMenuTitle, ListMenuItemList }: ListMenuPanelProps) => {
    const router = useRouter();
  
    const handleNavigation = (url: string) => {
      router.push(url);
    };
  
    return (
      <div>
        <ListSubheader sx={{ backgroundColor: COLORS.PRIMARY, color: COLORS.TEXT.PRIMARY }}>
          {ListMenuTitle}
        </ListSubheader>
        {ListMenuItemList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ pl: 3 }} onClick={() => handleNavigation(item.url)}>
              <ListItemIcon sx={{color: "white"}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </div>
    );
  };
  
  export default ListMenuPanel;