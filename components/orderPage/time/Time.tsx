'use client';
import 'dayjs/locale/de';
import 'dayjs/locale/en-gb';
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Typography, Box, Chip } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import 'dayjs/locale/en';

const SvgIcon = () => (
    <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9307 14.8613L1.00015 0.999858" stroke="#F15C30" strokeLinecap="round" />
        <path d="M33 1.13867L17.0695 15.0001" stroke="#F15C30" strokeLinecap="round" />
    </svg>
);
const locales = ['en', 'en-gb', 'de'];

type LocaleKey = (typeof locales)[number];

export default function Time() {
    const [locale, setLocale] = React.useState<LocaleKey>('de');
    const currentDate = dayjs().format('L');
    const [value, setValue] = React.useState<Dayjs | null>(dayjs(currentDate));
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const handleTimeAndDateClick = () => {
        setShowDatePicker(prevState => !prevState);
    };
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
            <Typography
                component="h4"
                sx={{
                    fontSize: '28px',
                    mt: '36px',
                    mb: '36px',
                    color: '#040705',
                    fontWeight: '700',
                    lineHeight: '36px',
                }}
            >
                Delivery time
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                    marginBottom: '32px',
                }}
            >
                <Chip
                    onClick={handleTimeAndDateClick}
                    disabled={!showDatePicker}
                    label="As soon as possible"
                    sx={{
                        width: '100%',
                        height: '66px',
                        borderRadius: '50px',
                        color: '#040705',
                        fontSize: '22px',
                        backgroundColor: showDatePicker ? '#bdbdbd' : '#ffc182',
                    }}
                />
                <Chip
                    onClick={handleTimeAndDateClick}
                    disabled={showDatePicker}
                    label="Time and date"
                    sx={{
                        width: '100%',
                        height: '66px',
                        borderRadius: '50px',
                        color: '#040705',
                        fontSize: '22px',
                        backgroundColor: showDatePicker ? '#ffc182' : '#bdbdbd',
                        '&:hover': {
                            backgroundColor: showDatePicker ? '#ffc182' : '#bdbdbd',
                        },
                    }}
                />
            </Box>
            {showDatePicker && <Box
                sx={{
                    display: 'flex',
                    gap: '20px',
                }}
            >
                <DatePicker
                    label="Delivery date"
                    name="delivery_date"
                    slots={{ openPickerIcon: SvgIcon }}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    views={['year', 'month', 'day']}
                    sx={{
                        width: '100%',
                        borderRadius: '50px',
                        '& .MuiInputBase-input': {
                            padding: ' 27px 0 14px 22px ',
                            fontSize: '24px',
                            fontWeight: '400',
                            lineHeight: '28px',
                        },
                        '& .MuiPaper-root.MuiPickersPopper-paper': {
                            boxShadow: 'none',
                            backgroundColor: '#fff',
                        },
                        '& .MuiSvgIcon-root': {
                            width: '2rem',
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            border: '1px solid #040705',
                            color: '#040705',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiIconButton-root:hover': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: '#828282',
                        },
                        '& .MuiFormLabel-root': {
                            color: '#828282',
                            fontSize: '14px',
                            top: '25px',
                            left: '10px',
                        },
                    }}
                    slotProps={{
                        desktopPaper: {
                            sx: {
                                marginBlock: '8px',
                                borderRadius: '40px',
                                boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)',
                            },
                        },
                        layout: {
                            sx: {
                                '& .MuiDateCalendar-root': {
                                    color: '#bbdefb',
                                    borderRadius: '40px',
                                    // borderColor: '#fff',
                                    // backgroundColor: '#fff',
                                },
                                '& .MuiPickersDay-root.Mui-selected': {
                                    backgroundColor: '#ffc182',
                                },
                                '& .MuiPickersDay-root.Mui-selected:hover': {
                                    backgroundColor: '#ffc182',
                                },
                                '& .MuiPickersCalendarHeader-label': {
                                    color: '#3e3b3b',
                                },
                            },
                        },
                    }}
                />

                <TimePicker
                    label="Delivery time"
                    name="delivery_time"
                    slots={{ openPickerIcon: SvgIcon }}
                    ampm={false}
                    defaultValue={dayjs()}
                    sx={{
                        width: '100%',
                        borderRadius: '50px',
                        '& .MuiInputBase-input': {
                            padding: ' 27px 0 14px 22px ',
                            fontSize: '24px',
                            fontWeight: '400',
                            lineHeight: '28px',
                        },
                        '& .MuiSvgIcon-root': {
                            width: '2rem',
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '50px',
                            border: '1px solid #040705',
                            color: '#040705',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiIconButton-root:hover': {
                            backgroundColor: 'transparent',
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: '#828282',
                        },
                        '& .MuiFormLabel-root': {
                            color: '#828282',
                            fontSize: '14px',
                            top: '25px',
                            left: '10px',
                        },
                        '& .MuiStack-root': {
                            position: 'relative',
                        },
                        '& .MuiTypography-root': {
                            color: '#828282',
                            fontSize: '14px',
                            top: '25px',
                            left: '10px',
                        },
                    }}
                    slotProps={{
                        desktopPaper: {
                            sx: {
                                marginBlock: '8px',
                                borderRadius: '40px',
                                boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)',
                            },
                        },
                        layout: {
                            sx: {
                                ' .MuiDialogActions-root': {
                                    display: 'none',
                                },
                                ' .MuiMultiSectionDigitalClockSection-root:not(:first-of-type)': {
                                    borderLeft: 'unset',
                                },
                                ' .MuiPickersLayout-contentWrapper ': {
                                    width: '304px',
                                    height: '326px',
                                },
                                ' .MuiMenuItem-root': {
                                    backgroundColor: 'transparent',
                                    color: '#040705',
                                },
                                ' .MuiMultiSectionDigitalClockSection-item.Mui-selected:hover': {
                                    backgroundColor: 'transparent',
                                },
                                ' .MuiMultiSectionDigitalClockSection-root': {
                                    maxHeight: '300px',
                                },
                                ' .MuiMultiSectionDigitalClock-root': {
                                    borderBottom: 'none',
                                    marginTop: '8px',
                                },
                                ' .MuiMultiSectionDigitalClockSection-item.Mui-selected': {
                                    backgroundColor: 'transparent',
                                    color: '#040705',
                                },
                            },
                        },
                    }}
                />
            </Box>}

        </LocalizationProvider>
    );
}
