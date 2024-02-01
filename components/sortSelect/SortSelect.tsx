'use client';
import React from 'react';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

type Props = {};

export default function SortSelect({}: Props) {
    const params = useParams();

    const router = useRouter();
    const [sort, setSort] = React.useState<string | null>(null);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value as string);
    };

    React.useEffect(() => {
        if (sort === null) return;

        router.replace(`/${params.category}${sort ? `?sort=${sort}` : ''}`);
    }, [sort]);

    return (
        <div>
            {/* <FormControl> */}
            <Select
                value={sort || ''}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Select sorting' }}
                sx={{
                    width: '374px',
                    fontSize: '20px',

                    '& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input': {
                        padding: '18.5px 50px',
                    },
                    '&.MuiInputBase-root': {
                        borderRadius: '50px',
                    },
                    '& .MuiSvgIcon-root.MuiSelect-icon': {
                        right: '50px',
                    },
                    '& .MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {},
                }}
            >
                <MenuItem
                    value=""
                    sx={{
                        '&.MuiButtonBase-root.MuiMenuItem-root': {
                            padding: '18.5px 50px',
                            fontSize: '20px',

                            '&.Mui-selected': {
                                backgroundColor: 'white',
                                fontWeight: '700',
                            },
                        },
                        '&.MuiButtonBase-root.MuiMenuItem-root:hover': {
                            backgroundColor: 'white',
                            color: '#F15C30',
                        },
                    }}
                >
                    Featured
                </MenuItem>
                <MenuItem
                    value={'asc'}
                    sx={{
                        '&.MuiButtonBase-root.MuiMenuItem-root': {
                            padding: '18.5px 50px',
                            fontSize: '20px',

                            '&.Mui-selected': {
                                backgroundColor: 'white',
                                fontWeight: '700',
                            },
                        },
                        '&.MuiButtonBase-root.MuiMenuItem-root:hover': {
                            backgroundColor: 'white',
                            color: '#F15C30',
                        },
                    }}
                >
                    Price: low-high
                </MenuItem>
                <MenuItem
                    value={'desc'}
                    sx={{
                        '&.MuiButtonBase-root.MuiMenuItem-root': {
                            padding: '18.5px 50px',
                            fontSize: '20px',
                            '&.Mui-selected': {
                                backgroundColor: 'white',
                                fontWeight: '700',
                            },
                        },
                        '&.MuiButtonBase-root.MuiMenuItem-root:hover': {
                            backgroundColor: 'white',
                            color: '#F15C30',
                        },
                    }}
                >
                    Price: high-low
                </MenuItem>
            </Select>
            {/* </FormControl> */}
        </div>
    );
}
