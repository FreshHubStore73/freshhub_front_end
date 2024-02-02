'use client';
import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Check from '@mui/icons-material/Check';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Button from '@mui/material/Button';

const options = ['Featured', 'Price: low-high', 'Price: high-low'];

export default function SortSelect() {
    const [anchorEl, setAnchorEl] = React.useState<any>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [sort, setSort] = React.useState<string | null>(null);

    const params = useParams();
    const router = useRouter();
    const sortValues = ['', 'asc', 'desc'];
    const open = Boolean(anchorEl);

    const handleClickSortButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setSort(sortValues[index]);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
        if (sort === null) return;
        console.log('sent request');
        router.replace(`/${params.category}${sort ? `?sort=${sort}` : ''}`);
    }, [sort]);

    const content = (isActive: boolean, text: string) =>
        isActive ? (
            <>
                <ListItemIcon>
                    <Check htmlColor="#040705" />
                </ListItemIcon>
                {text}
            </>
        ) : (
            <ListItemText
                inset={!isActive}
                sx={{
                    '& .MuiTypography-root:hover': {
                        color: '#F15C30',
                    },
                }}
            >
                {text}
            </ListItemText>
        );
    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'lock-menu for sorting' : undefined}
                aria-haspopup="listbox"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClickSortButton}
                endIcon={<ExpandMoreRoundedIcon />}
                sx={{
                    '&.MuiButtonBase-root.MuiButton-root': {
                        backgroundColor: 'white',
                        color: '#3E3B3B',
                        justifyContent: 'space-between',
                        padding: '12px 50px',
                        border: '1px solid #3E3B3B',
                        borderRadius: '50px',
                        fontSize: '20px',
                        width: '374px',
                    },
                }}
            >
                {options[selectedIndex]}
            </Button>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
                sx={{
                    '& .MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
                        transform: 'translateY(-60px) !important',
                        width: '374px',
                        borderRadius: '28px',
                        paddingBlock: '25px',
                    },
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === selectedIndex}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                        sx={{
                            fontSize: '20px',
                            padding: '7px 48px',
                            backgroundColor: 'white',
                            '&.MuiButtonBase-root.MuiMenuItem-root:hover': {
                                backgroundColor: 'white',
                            },
                            '&.MuiButtonBase-root.MuiMenuItem-root.Mui-selected ': {
                                backgroundColor: 'white',
                                fontWeight: 700,
                                color: '#040705',
                                opacity: 1,
                            },
                        }}
                    >
                        {content(index === selectedIndex, option)}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
