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
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={sort || ''}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Select sorting' }}
                >
                    <MenuItem value="">Featured</MenuItem>
                    <MenuItem value={'asc'}>Price: low-high</MenuItem>
                    <MenuItem value={'desc'}>Price: high-low</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
