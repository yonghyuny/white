import {AccordionMenuPanelProps} from "@/components/molecules/AccordionMenuPanel/AccordionMenuPanel";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PeopleIcon from '@mui/icons-material/People';
import EventIcon from '@mui/icons-material/Event';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const ACCORDION_MENUS: AccordionMenuPanelProps[] = [
    {
        AccordionMenuTitle: {AccordionTitle: '기사님 관리', Icon: LocalShippingIcon  },
        AccordionMenuItemList: {
            AccordionMenuItems: [
                {name: '리스트 보기', url: 'courier/list'},
                {name: '등록하기', url: 'courier/signup'},
                {name: '수정하기', url: 'courier/edit'},
            ]
        }
    },
    {
        AccordionMenuTitle: {AccordionTitle: '회원 관리', Icon: PeopleIcon},
        AccordionMenuItemList: {
            AccordionMenuItems: [
                {name: '리스트 보기', url: 'customer/list'},
                {name: '등록하기', url: 'customer/signup'},
                {name: '수정하기', url: 'customer/edit'},
            ]
        }
    },
    {
        AccordionMenuTitle: {AccordionTitle: '스케쥴', Icon: EventIcon},
        AccordionMenuItemList: {
            AccordionMenuItems: [
                {name: '리스트 보기', url: 'schedule/list'},
                {name: '추가하기', url: 'schedule/add'},
                {name: '수정하기', url: 'schedule/edit'},
            ]
        }
    },
    {
        AccordionMenuTitle: {AccordionTitle: '영업 매출', Icon: TrendingUpIcon},
        AccordionMenuItemList: {
            AccordionMenuItems: [
                {name: '일자별 매출', url: '/'},
                {name: '주간 매출', url: '/'},
                {name: '월별 매출', url: '/'},
            ]
        }
    }
]
