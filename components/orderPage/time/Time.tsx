'use client';
import { useState } from 'react';
import 'dayjs/locale/en';
import { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Typography, Box, Chip } from '@mui/material';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { initialDate } from '@/utils/helpers';

type Picker = 0 | 1;

export default function Time() {
    const [activePicker, setActivePicker] = useState<Picker>(0);
    const [value, setValue] = useState<Dayjs>(initialDate());

    const handleTimeAndDateClick = (entity: Picker) => {
        setActivePicker(entity);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'en'}>
            <Typography
                component="h4"
                sx={{
                    fontSize: { mobile: '16px', tablet: '22px', desktop: '28px' },
                    marginBlock: { mobile: '20px 16px', tablet: '30px 29px', desktop: '36px' },
                    color: '#040705',
                    fontWeight: '700',
                }}
            >
                Delivery time
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: { mobile: '10px', tablet: '20px' },
                    marginBottom: { mobile: '14px', tablet: '18px', desktop: '32px' },
                }}
            >
                <Chip
                    onClick={() => handleTimeAndDateClick(0)}
                    disabled={activePicker === 0}
                    label="As soon as possible"
                    sx={{
                        width: '100%',
                        height: { mobile: '44px', tablet: '60px', desktop: '66px' },
                        borderRadius: '50px',
                        color: activePicker === 0 ? '#fff' : '#040705',
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '22px' },
                        backgroundColor: activePicker === 0 ? '#ffc182' : '#bdbdbd',
                        boxShadow: activePicker === 0 ? '' : 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.15), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 2px rgba(0, 0, 0, 0.12)',
                        transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        '&:hover': {
                            backgroundColor: activePicker === 0 ? '#ffc182' : '#bdbdbd',
                            boxShadow: activePicker !== 0 ? 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.15), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)' : 'inherit',
                        },
                        '&.Mui-disabled': {
                            opacity: 1
                        },

                    }}
                />
                <Chip
                    onClick={() => handleTimeAndDateClick(1)}
                    disabled={activePicker === 1}
                    label="Time and date"
                    sx={{
                        width: '100%',
                        height: { mobile: '44px', tablet: '60px', desktop: '66px' },
                        borderRadius: '50px',
                        color: activePicker === 1 ? '#fff' : '#040705',
                        fontSize: { mobile: '14px', tablet: '20px', desktop: '22px' },
                        backgroundColor: activePicker === 1 ? '#ffc182' : '#bdbdbd',
                        boxShadow: activePicker === 1 ? '' : 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.15), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 2px rgba(0, 0, 0, 0.12)',
                        transition: '250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                        '&:hover': {
                            backgroundColor: activePicker === 1 ? '#ffc182' : '#bdbdbd',
                            boxShadow: activePicker !== 1 ? 'inset 4px 4px 5px -2px rgba(0, 0, 0, 0.15), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)' : 'inherit',
                        },
                        '&.Mui-disabled': {
                            opacity: 1
                        },
                    }}
                />
            </Box>
            {activePicker === 1 && (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { mobile: '1fr', tablet: '1fr 1fr', desktop: '1fr 1fr' },
                        gap: { mobile: '10px', tablet: '20px', desktop: '20px' },
                    }}
                >
                    <DatePicker date={value} setDate={setValue} />
                    <TimePicker date={value} />
                </Box>
            )}
        </LocalizationProvider>
    );
}
