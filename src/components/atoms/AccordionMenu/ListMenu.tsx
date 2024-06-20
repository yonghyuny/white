<<<<<<< HEAD
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
            backgroundColor: "#3f4d67",
            borderColor: "#3f4d67",
            transition: "all 0.3s",
          }}
        >
          <ListItemButton>
            <ListItemText
              primary={value.name}
              sx={{
                fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_SMALL,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default ListMenu;
=======
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
            backgroundColor: "#3f4d67",
            borderColor: "#3f4d67",
            transition: "all 0.3s",
          }}
        >
          <ListItemButton>
            <ListItemText
              primary={value.name}
              sx={{
                fontSize: SIZES.FONT_SIZE.EXTRA_EXTRA_SMALL,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default ListMenu;
>>>>>>> 6fdb4d82e6456c4d9d995ec22919b27fb247707d
