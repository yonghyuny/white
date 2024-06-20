import { LIST_MENUS } from "@/constants/LIST_MENUS"
import ListMenuPanel from "../AccordionMenuPanel/ListMenuPanel"
import { colors } from "@mui/material";


const ListMenuGroup = ()=>{
    return(
        <>
        {
         LIST_MENUS.map((menu, index)=>(
           <ListMenuPanel 
           key={index}
           ListMenuTitle={menu.ListMenuTitle}
           ListMenuItemList={menu.ListMenuItemList}
        /> 
        ))}
        </>
    );
};

export default ListMenuGroup;