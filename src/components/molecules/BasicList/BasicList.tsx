import * as React from 'react';
import {List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import Link from 'next/link';

// 항목 타입 정의
type ListItemType = {
    label: string;
    href: string;
}

// props 타입 정의
interface BasicListProps {
    items: ListItemType[];
}

const BasicList: React.FC<BasicListProps> = ({ items }) => {
    return (
        <List>
            {items.map((item, index) => (
                <ListItem disablePadding key={index}>
                    <Link href={item.href} passHref legacyBehavior>
                        <ListItemButton component="a">
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
        </List>
    );
};

export default BasicList;
