import COLORS from "@/styles/colors";
import SIZES from "@/styles/sizes";
import { SvgIconComponent } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemText, colors } from "@mui/material";
import { useRouter } from "next/router";

export type ListMenuItem = {
    name:string;
    url:string;
    Icon:SvgIconComponent;
}

export type ListMenuItemProps = {
    ListMenuItems:ListMenuItem[]
}

const ListMenu = ({ListMenuItems}:ListMenuItemProps) => {
    const router = useRouter()
    const moveToUrl = (url:string) => router.push(`/${url}`)

    return (
       <>
        {ListMenuItems?.map((value) => (
            <ListItem key={value.name}
                      onClick={() => moveToUrl(value.url)}
                      sx={{
                          borderColor: 'divider', transition: "all 0.3s",
                      }}
            >
                <ListItemButton>
                    <ListItemText primaryTypographyProps={{fontSize: SIZES.FONT_SIZE.SMALL, color:"#a9b7d0"}}
                                  primary={value.name}/>
                </ListItemButton>
            </ListItem>
        ))}
    </>
    )
}

export default ListMenu