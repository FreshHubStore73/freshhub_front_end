import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(customParseFormat);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);

export function addSpaces(text: string): string {
    return [...text]
        .reduce((acc: string[], cur, i) => {
            [2, 5, 8].some((e) => e === i) ? acc.push(' ', cur) : acc.push(cur);
            return acc;
        }, [])
        .join('');
}

///////////////////////////////////////////////////////
//For Time and Date Pickers

export enum Schedule {
    START = '09:00',
    END = '21:30',
}

export const getEarlyDeliveryTime = (currentTime: Dayjs, startTime?: Schedule): Dayjs | null => {
    // Round up the current time to the next quarter hour
    const roundedTime = currentTime.minute(Math.ceil(currentTime.minute() / 15) * 15).second(0);
    // Calculate the earliest delivery time: either currentTime + 1.5 hours or startTime + 1.5 hours
    const earliestDeliveryTime = dayjs.max(
        roundedTime.add(1.5, 'hour'),
        dayjs(startTime || Schedule.START, 'HH:mm').add(1.5, 'hour'),
    );
    return earliestDeliveryTime;
};

export const getTimeScale = (workday: Dayjs) => {
    const now = dayjs();
    const openingTime = dayjs(Schedule.START, 'HH:mm')
        .set('date', workday.date())
        .set('month', workday.month())
        .set('year', workday.year());
    const closingTime = dayjs(Schedule.END, 'HH:mm')
        .set('date', workday.date())
        .set('month', workday.month())
        .set('year', workday.year());
    const firstDeliveryTime = now.isSameOrBefore(openingTime)
        ? getEarlyDeliveryTime(openingTime)
        : getEarlyDeliveryTime(now);

    if (!firstDeliveryTime) return [];

    const timeScale = [];
    let current = firstDeliveryTime;

    while (current.isSameOrBefore(closingTime, 'minutes')) {
        timeScale.push(current.format('HH:mm'));
        current = current.add(1.5, 'hour');
    }

    return timeScale;
};

export const initialDate = (): Dayjs => {
    const now = dayjs();
    const earliestDeliveryTime = getEarlyDeliveryTime(now);
    const openingTime = dayjs(Schedule.START, 'HH:mm');
    const closingTime = dayjs(Schedule.END, 'HH:mm');

    if (earliestDeliveryTime?.isBetween(openingTime, closingTime, 'minutes', '[]')) {
        return now;
    }

    return now.add(1, 'day');
};
///////////////////////////////////////////////////////
