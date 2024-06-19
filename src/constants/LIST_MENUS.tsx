import { ListMenuItemProps } from "@/components/atoms/AccordionMenu/ListMenu";
import ListTitle from "@/components/atoms/AccordionTitle/ListTitle";
import { ListMenuPanelProps } from "@/components/molecules/AccordionMenuPanel/ListMenuPanel";
import { Event, Home } from "@mui/icons-material";
import LocalShipping from "@mui/icons-material/LocalShipping";
import People from "@mui/icons-material/People";
import TrendingUp from "@mui/icons-material/TrendingUp";

export const LIST_MENUS: ListMenuPanelProps[] = [
  {
    ListMenuTitle: "NAVIGATION",
    ListMenuItemList: [{ name: "Dashboard", url: "/", icon: <Home /> }],
  },
  {
    ListMenuTitle: "기사님 관리",
    ListMenuItemList: [
      { name: "리스트 보기", url: "courier/list", icon: <LocalShipping /> },
      { name: "등록하기", url: "courier/signup", icon: <LocalShipping /> },
      { name: "수정하기", url: "courier/edit", icon: <LocalShipping /> },
    ],
  },
  {
    ListMenuTitle: "회원 관리",
    ListMenuItemList: [
      { name: "리스트 보기", url: "customer/list", icon: <People /> },
      { name: "등록하기", url: "customer/signup", icon: <People /> },
      { name: "수정하기", url: "customer/edit", icon: <People /> },
    ],
  },
  {
    ListMenuTitle: "스케줄",
    ListMenuItemList: [
      { name: "리스트 보기", url: "schedule/list", icon: <Event /> },
      { name: "추가하기", url: "schedule/add", icon: <Event /> },
      { name: "수정하기", url: "schedule/edit", icon: <Event /> },
    ],
  },
  {
    ListMenuTitle: "영업 매출",
    ListMenuItemList: [
      { name: "일자별 매출", url: "/", icon: <TrendingUp /> },
      { name: "주간 매출", url: "/", icon: <TrendingUp /> },
      { name: "월별 매출", url: "/", icon: <TrendingUp /> },
    ],
  },
];
