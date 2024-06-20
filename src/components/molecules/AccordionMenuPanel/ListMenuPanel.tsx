import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  colors,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

export type ListMenuPanelProps = {
  ListMenuTitle: string;
  ListMenuItemList: { name: string; url: string; icon: React.ReactNode }[];
};

const ListMenuPanel = ({
  ListMenuTitle,
  ListMenuItemList,
}: ListMenuPanelProps) => {
  const router = useRouter();

  const handleNavigation = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <ListSubheader
        sx={{
          backgroundColor: "#3f4d67",
          color: "white",
          fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_SMALL,
        }}
      >
        {ListMenuTitle}
      </ListSubheader>
      {ListMenuItemList.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            sx={{ pl: 3 }}
            onClick={() => handleNavigation(item.url)}
          >
            <ListItemIcon sx={{ color: "#919fb8" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.name}
              sx={{ fontSize: SIZES.FONT_SIZE.EXTRA_SMALL }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
};

export default ListMenuPanel;
