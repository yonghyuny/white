import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";

import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/router";

export type ListMenuItem = {
  name: string;
  url: string;
};

export type ListMenuItemProps = {
  ListMenuItems: ListMenuItem[];
};

const ListMenu = ({ ListMenuItems }: ListMenuItemProps) => {
  const router = useRouter();
  const moveToUrl = (url: string) => router.push(`/${url}`);

  return (
    <>
      {ListMenuItems?.map((value) => (
        <ListItem
          key={value.name}
          onClick={() => moveToUrl(value.url)}
          sx={{
            borderColor: "divider",
            transition: "all 0.3s",
          }}
        >
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{ fontSize: SIZES.FONT_SIZE.SMALL }}
              primary={value.name}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default ListMenu;
