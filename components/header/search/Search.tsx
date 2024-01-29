import React, { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import IconButton from '@mui/material/IconButton';

import { InputAdornment, SvgIcon, TextField } from '@mui/material';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const SearchIcon = () => {
    return (
        <SvgIcon>
            <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4.67175 35.4216L13.112 26.9814C10.7464 24.3792 9.49246 20.955 9.618 17.4405C9.74354 13.926 11.2386 10.6 13.7838 8.17318C16.329 5.74638 19.7224 4.41125 23.2389 4.4531C26.7553 4.49496 30.116 5.91047 32.6027 8.39717C35.0894 10.8839 36.5049 14.2445 36.5467 17.761C36.5886 21.2775 35.2535 24.6709 32.8267 27.216C30.3999 29.7612 27.0739 31.2563 23.5594 31.3818C20.0449 31.5074 16.6207 30.2534 14.0185 27.8879L5.57823 36.3281C5.45803 36.4483 5.29499 36.5158 5.12499 36.5158C4.95499 36.5158 4.79196 36.4483 4.67175 36.3281C4.55154 36.2079 4.48401 36.0449 4.48401 35.8749C4.48401 35.7049 4.55154 35.5418 4.67175 35.4216ZM35.2344 17.9374C35.2344 15.53 34.5205 13.1767 33.183 11.175C31.8456 9.17337 29.9446 7.61327 27.7205 6.69201C25.4963 5.77075 23.049 5.5297 20.6879 5.99936C18.3268 6.46901 16.1579 7.62827 14.4557 9.33054C12.7534 11.0328 11.5941 13.2016 11.1245 15.5627C10.6548 17.9239 10.8959 20.3712 11.8171 22.5953C12.7384 24.8194 14.2985 26.7204 16.3002 28.0579C18.3018 29.3954 20.6551 30.1092 23.0625 30.1092C26.2896 30.1058 29.3836 28.8224 31.6656 26.5404C33.9475 24.2585 35.231 21.1645 35.2344 17.9374Z"
                    fill="#040705"
                />
            </svg>
        </SvgIcon>
    );
};

type Props = {};

type InputEvent = KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>;

export default function SearchInput({}: Props) {
    const [expanded, setExpanded] = useState(false);
    const [search, setSearch] = useState('');

    const inputRef = useRef<any>(null);

    const handleClickAway = () => {
        !search.length && setExpanded(false);
    };

    // const handleClickOrEnter = (event: InputEvent) => {
    //     if (!search.length) setExpanded(false);
    //     if (event.type === 'click') {
    //         // Обработка события клика мышкой
    //         console.log('Search...', search);
    //         // setTimeout(() => {
    //         //     setSearch('');
    //         // }, 1000);
    //     } else if (
    //         event.type === 'keydown' &&
    //         (event as KeyboardEvent<HTMLInputElement>).code === '13'
    //     ) {
    //         console.log('press on enter');

    //         // Обработка события нажатия кнопки Enter
    //         console.log('Search...', search);
    //     }
    // };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        // expanded ? handleClickOrEnter(event) : setExpanded(true);
        !expanded && setExpanded(true);
    };
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('click on lupa');
        // expanded ? handleClickOrEnter(event) : setExpanded(true);
        expanded && search.length ? console.log('Search...', search) : setExpanded(true);
    };

    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <TextField
                    inputRef={inputRef}
                    variant="outlined"
                    // onKeyDown={handleKeyDown}
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    sx={{
                        m: 1,
                        width: expanded ? '25ch' : '41px',
                        transition: 'all 0.3s',
                        '& .MuiOutlinedInput-root': {
                            paddingLeft: '0px',
                        },
                        '& .MuiInputBase-root': {
                            borderRadius: 0,
                            '&.Mui-focused > fieldset': {
                                borderBottomColor: 'inherit',
                            },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                            borderBottom: expanded ? '1px solid black' : 'none',
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{ p: 0 }}>
                                <IconButton onClick={handleClick} sx={{ p: '12px' }}>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                {expanded ? (
                                    <IconButton
                                        aria-label="clear search"
                                        onClick={() => {
                                            setSearch('');
                                        }}
                                    >
                                        &times;
                                    </IconButton>
                                ) : null}
                            </InputAdornment>
                        ),
                    }}
                ></TextField>
            </ClickAwayListener>
        </>
    );
}
