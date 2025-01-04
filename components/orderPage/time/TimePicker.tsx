import { useEffect, useRef, useState } from 'react';

import { ClickAwayListener, Grow, IconButton, InputAdornment, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper, Stack, TextField } from '@mui/material';
import { Check } from '@mui/icons-material';
import dayjs, { Dayjs } from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import { ArrowIcon } from './DatePicker';
import { getTimeScale } from '@/utils/helpers';

dayjs.extend(minMax);

type Props = { date: Dayjs }

export default function TimePicker({ date }: Props) {
    const options = getTimeScale(date);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>(options[0]);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) return;
        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }
        prevOpen.current = open;
    }, [open]);

    useEffect(() => {
        setValue(options[0]);
    }, [date]);

    const handleMenuItemClick = (
        event: Event | React.SyntheticEvent, value: string
    ) => {
        value && setValue(value);
        handleClose(event);
    };

    const content = (isActive: boolean, text: string) =>
    (<>
        {
            isActive &&
            <ListItemIcon>
                <Check htmlColor="#040705" />
            </ListItemIcon>
        }
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
    </>);
    return (
        <Stack>
            <TextField
                label="Delivery time"
                name="delivery_time"
                value={value}
                ref={anchorRef}
                variant='outlined'
                sx={{
                    width: '100%',
                    borderRadius: '50px',
                    '& .MuiInputBase-input': {
                        padding: {
                            mobile: '20px 0 7px 22px',
                            tablet: '31px 0 11px 28px',
                            desktop: '27px 0 14px 22px',
                        },
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
                        fontWeight: '400',
                    },
                    '& .MuiPaper-root.MuiPickersPopper-paper': {
                        boxShadow: 'none',
                        backgroundColor: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                        height: { mobile: '44px', tablet: '66px', desktop: '78px' },
                        borderRadius: '50px',
                        paddingRight: { mobile: '14px', tablet: '20px', desktop: '18px' },
                        border: '1px solid #040705',
                        color: '#040705',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none',
                    },
                    '& .MuiButtonBase-root': {
                        marginRight: 0,
                        paddingRight: '12px 8px',
                    },
                    '& .MuiIconButton-root': {
                        padding: {
                            mobile: '14px 8px',
                            desktop: '16px 8px',
                        },
                    },
                    '& .MuiIconButton-root:hover': {
                        backgroundColor: 'transparent',
                    },
                    '& .MuiFormLabel-root.Mui-focused': {
                        color: '#828282',
                    },
                    '& .MuiFormLabel-root': {
                        color: '#828282',
                        fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
                        top: { mobile: '16px', tablet: '23px', desktop: '25px' },
                        left: { mobile: '10px', tablet: '18px', desktop: '10px' },
                    },
                }}
                slotProps={{
                    input: {
                        readOnly: true,
                        endAdornment: (
                            <InputAdornment
                                position={'start'}
                                onClick={handleToggle}
                                sx={{
                                    '&': {
                                        marginRight: '0px',
                                    }
                                }}
                            >
                                <IconButton >
                                    <ArrowIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{
                    zIndex: 1,
                    width: `${anchorRef.current?.clientWidth}px`,

                }}
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper
                            sx={{
                                width: `${anchorRef.current?.clientWidth}px`,
                                marginBlock: '8px',
                                borderRadius: '40px',
                                boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)',
                                overflow: 'hidden',
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}

                                >
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            disabled={option === value}
                                            selected={option === value}
                                            onClick={(event) => handleMenuItemClick(event, option)}
                                            sx={{
                                                fontSize: { mobile: '10px', tablet: '14px', desktop: '20px' },
                                                minHeight: 'unset',
                                                padding: {
                                                    mobile: '2px 14px',
                                                    tablet: '5px 24px',
                                                    desktop: '7px 48px',
                                                },
                                                backgroundColor: 'transparent',
                                                '& .MuiListItemText-inset': {
                                                    paddingLeft: { mobile: '21px', tablet: '34px', desktop: '41px' },
                                                },
                                                '& .MuiListItemIcon-root': {
                                                    minWidth: { mobile: '21px', tablet: '34px', desktop: '41px' },
                                                },
                                                '&.Mui-selected ': {
                                                    backgroundColor: 'transparent',
                                                    fontWeight: 700,
                                                    color: '#040705',
                                                    opacity: 1,
                                                },
                                                '& .MuiInputBase-input': {
                                                    padding: {
                                                        mobile: '20px 0 7px 22px',
                                                        tablet: '31px 0 11px 28px',
                                                        desktop: '27px 0 14px 22px',
                                                    },
                                                    fontSize: { mobile: '14px', tablet: '20px', desktop: '24px' },
                                                    fontWeight: '400',
                                                },
                                                '& .MuiOutlinedInput-root': {
                                                    height: { mobile: '44px', tablet: '66px', desktop: '78px' },
                                                    borderRadius: '50px',
                                                    paddingRight: { mobile: '14px', tablet: '20px', desktop: '18px' },
                                                    border: '1px solid #040705',
                                                    color: '#040705',
                                                },
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                                '& .MuiFormLabel-root.Mui-focused': {
                                                    color: '#828282',
                                                },
                                                '& .MuiFormLabel-root': {
                                                    color: '#828282',
                                                    fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
                                                    top: { mobile: '16px', tablet: '23px', desktop: '25px' },
                                                    left: { mobile: '10px', tablet: '16px', desktop: '10px' },
                                                },
                                                '& .MuiStack-root': {
                                                    position: 'relative',
                                                },
                                            }}
                                        >
                                            {content(option === value, option)}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Stack>
    )
}