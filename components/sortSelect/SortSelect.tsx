'use client';
import * as React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Check from '@mui/icons-material/Check';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function SortSelect() {
    const options = ['Featured', 'Price: low-high', 'Price: high-low'];
    const rawQuery = useSearchParams();
    const searchParams = new URLSearchParams(rawQuery);
    const router = useRouter();
    const sortValues = ['', 'asc', 'desc'];

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const open = Boolean(anchorEl);

    const handleClickSortButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        const sort = sortValues[index];
        if (sort) {
            searchParams.has('sort')
                ? searchParams.set('sort', sort)
                : searchParams.append('sort', sort);
        } else {
            searchParams.delete('sort');
        }
        const url = new URL(window.location.pathname, window.location.href);
        url.search = searchParams.toString();
        router.replace(decodeURIComponent(url.toString()));
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const content = (isActive: boolean, text: string) =>
        isActive ? (
            <>
                <ListItemIcon
                    sx={{
                        '& .MuiSvgIcon-root': {
                            fontSize: { mobile: '14px', tablet: '22px', desktop: '27px' },
                        },
                    }}
                >
                    <Check htmlColor="#040705" />
                </ListItemIcon>
                {text}
            </>
        ) : (
            <ListItemText
                inset={!isActive}
                sx={{
                    '& .MuiTypography-root:hover': {
                        color: 'accent.main',
                    },
                }}
            >
                {text}
            </ListItemText>
        );
    return (
        <>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'lock-menu for sorting' : undefined}
                aria-haspopup="listbox"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClickSortButton}
                endIcon={<ExpandMoreRoundedIcon />}
                disableTouchRipple
                sx={{
                    alignSelf: 'center',
                    '&.MuiButton-root': {
                        height: { mobile: '28px', tablet: '45px', desktop: '60px' },
                        width: { mobile: '164px', tablet: '240px', desktop: '374px' },
                        lineHeight: 'unset',
                        fontSize: { mobile: '10px', tablet: '14px', desktop: '20px' },
                        borderRadius: { mobile: '24px', tablet: '50px' },
                        justifyContent: 'space-between',
                        paddingInline: { mobile: '12px', tablet: '20px', desktop: '50px' },
                        backgroundColor: 'white',
                        color: '#3E3B3B',
                        border: '1px solid #3E3B3B',
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
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                sx={{
                    '& .MuiPopover-paper': {
                        width: { mobile: '164px', tablet: '240px', desktop: '374px' },
                        borderRadius: { mobile: '12px', tablet: '20px', desktop: '28px' },
                    },
                    '& .MuiList-root': {
                        paddingBlock: { mobile: '10px', tablet: '17px', desktop: '29px' },
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
                            fontSize: { mobile: '10px', tablet: '14px', desktop: '20px' },
                            minHeight: 'unset',
                            padding: {
                                mobile: '2px 14px',
                                tablet: '5px 24px',
                                desktop: '7px 48px',
                            },
                            backgroundColor: 'white',

                            '& .MuiListItemText-inset': {
                                paddingLeft: { mobile: '21px', tablet: '34px', desktop: '41px' },
                            },
                            '& .MuiListItemIcon-root': {
                                minWidth: { mobile: '21px', tablet: '34px', desktop: '41px' },
                            },
                            '&:hover': {
                                backgroundColor: 'white',
                            },
                            '&.Mui-selected ': {
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
        </>
    );
}
