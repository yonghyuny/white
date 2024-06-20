import SIZES from "@/styles/sizes";
import { List, ListItemText, Typography } from "@mui/material";

export type ListTitleProps = {
  ListTitle: string;
};

const ListTitle = ({ ListTitle }: ListTitleProps) => {
  return (
    <List
      sx={{
        backgroundColor: "#3f4d67",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemText>
        <Typography sx={{ fontSize: SIZES.FONT_SIZE.EXTRA_SMALL }}>
          {ListTitle}
        </Typography>
      </ListItemText>
    </List>
  );
};

export default ListTitle;
