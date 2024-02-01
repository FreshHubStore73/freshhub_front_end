'use client';
import React from 'react';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
    path: {
        category: string;
        sortType: string;
    };
};

export default function SortSelect({ path }: Props) {
    const [sort, setSort] = React.useState<string | null>(path.sortType || null);
    const link = React.useRef<HTMLAnchorElement | null>(null);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSort(event.target.value as string);
    };

    React.useEffect(() => {
        if (sort === null) return;

        link.current?.click();
    }, [sort]);

    return (
        <div>
            <Link href={`/${path.category}${sort ? `?sort=${sort}` : ''}`} ref={link}></Link>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                    value={sort !== null ? sort : ''}
                    defaultValue={''}
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
// return (
//         <div>
//             <button>
//                 <Link href={`/categories/${category}/sort-asc`}>ASC</Link>
//             </button>
//             <button>
//                 <Link href={`/categories/${category}/sort-desc`}>DESC</Link>
//             </button>
//         </div>
//     );
