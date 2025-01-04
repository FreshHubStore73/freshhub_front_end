import { useEffect, useRef, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { SvgIcon } from '@mui/material';
import { getTimeScale } from '@/utils/helpers';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

type Props = {
    date: Dayjs;
    setDate: (newDate: Dayjs) => void;
}

const shouldDisable = (type: 'date' | 'month' | 'year') => (cur: Dayjs) => {
    const now = dayjs();
    const options = getTimeScale(now);
    return options.length === 0 && type === 'date' ? cur.isSameOrBefore(now, type) : cur.isBefore(now, type);
}

export default function DatePicker({ date, setDate }: Props) {
    const textFieldRef = useRef<HTMLInputElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(textFieldRef.current?.clientWidth || 0);
    }, []);

    return (
        <MuiDatePicker
            ref={textFieldRef}
            label="Delivery date"
            name="delivery_date"
            slots={{
                openPickerIcon: ArrowIcon,
            }}
            value={date}
            onChange={(newDate) => {
                setDate(newDate || dayjs());
            }}
            disablePast
            showDaysOutsideCurrentMonth
            views={['day']}
            viewRenderers={{
                year: undefined,
                month: undefined,
            }}
            format="DD.MM.YYYY"
            sx={{
                width: '100%',
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
                '& .MuiFormLabel-root': {
                    color: '#828282',
                    fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
                    top: { mobile: '16px', tablet: '23px', desktop: '25px' },
                    left: { mobile: '10px', tablet: '18px', desktop: '10px' },
                },
                '& .MuiButtonBase-root': {
                    marginRight: 0,
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
            }}
            shouldDisableDate={shouldDisable('date')}
            shouldDisableMonth={shouldDisable('month')}
            shouldDisableYear={shouldDisable('year')}
            slotProps={{
                popper: {
                    sx: {
                        zIndex: 10,
                        '& .MuiDateCalendar-root': {
                            width: `${width}px`,
                            height: { mobile: '300px', tablet: '270px', desktop: '260px' },
                        },
                    }
                },
                desktopPaper: {
                    sx: {
                        marginBlock: '8px',
                        borderRadius: '40px',
                        boxShadow: '0px 0px 10px 1px rgba(0, 0, 0, 0.15)',
                    },
                },
                layout: {
                    sx: {
                        '& .MuiPickersDay-root': {
                            width: { mobile: '36px', tablet: '30px', desktop: '28px' },
                            height: { mobile: '36px', tablet: '30px', desktop: '28px' },
                            color: '#000',
                            '&.Mui-disabled': {
                                color: 'rgba(0, 0, 0, 0.25)',
                            }
                        },
                        '& .MuiDayCalendar-weekDayLabel': {
                            width: { mobile: '36px', tablet: '30px', desktop: '28px' },
                            height: { mobile: '36px', tablet: '30px', desktop: '28px' },
                            fontWeight: '700',
                        },
                        '& .MuiPickersCalendarHeader-labelContainer': {
                            marginRight: '0',
                            cursor: 'unset'
                        },
                        '& .MuiPickersCalendarHeader-label': {
                            color: '#3e3b3b',
                        },
                        '& .MuiPickersCalendarHeader-root': {
                            justifyContent: 'center',
                        },
                        '& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
                            backgroundColor: '#ffc182',
                        },
                        '& .MuiButtonBase-root.MuiPickersDay-root:hover ': {
                            backgroundColor: 'unset',
                        },
                        '& .MuiPickersFadeTransitionGroup-root': {
                            marginInline: 'auto',
                        },
                        '& .MuiPickersDay-dayOutsideMonth': {
                            color: '#828282',
                        },
                    },
                },
            }}
        />
    )
}
export function ArrowIcon() {
    return (
        <SvgIcon
            sx={{
                width: { mobile: '19px', tablet: '24px', desktop: '32px' },
                height: { mobile: '8px', tablet: '10px', desktop: '14px' },
                cursor: 'pointer',
            }}
        >
            <svg

                viewBox="0 0 34 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16.9307 14.8613L1.00015 0.999858" stroke="#F15C30" strokeLinecap="round" />
                <path d="M33 1.13867L17.0695 15.0001" stroke="#F15C30" strokeLinecap="round" />
            </svg>
        </SvgIcon>
    )
}