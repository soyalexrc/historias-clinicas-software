export function formatDateString(dateString: string): Date {
    // Create a new Date object from the input string
    const hours = dateString.split('T')[1].split(':')[0];
    const minutes = dateString.split('T')[1].split(':')[1];
    const seconds = dateString.split('T')[1].split(':')[2];


    const date = new Date(dateString);
    date.setUTCHours(parseInt(hours), parseInt(minutes), parseInt(seconds));

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
        throw new Error('Invalid date format');
    }
    return date;
}

export function formatDateForTable(date: Date | string, separator: string = '/') {
    const [d, t] = date.toString().split('T')
    return `${formatDaysMonthYear(d, separator)} ${formatTime(t.substring(0, 8))}`;
}

export function formatDateForTableWithoutTime(date: Date | string, separator: string = '/') {
    const [d] = date.toString().split('T')
    return `${formatDaysMonthYear(d, separator)}`;
}

export function getShiftType(date: Date | string): string {
    const [_, t] = date.toString().split('T')
    const hours = t.split(':')[0];
    if (Number(hours) > 12) {
        return `PM`;
    }
    return `AM`;
}

export function getISOStringInLocalTimeZone(): string {
    const d = new Date();
    const dateTimeLocal = d.toLocaleString('es-PE', {timeZone: 'America/Lima'});
    // Split the date string into parts
    const [date, time] = dateTimeLocal.split(', ');
    const [day, month, year] = date.split('/');
    const [timeString, amPm] = time.split(' ');
    const [hours, minutes, seconds] = timeString.split(':');
    const sa = '2024-09-01T02:00:36.642Z'
    // console.log({hours});
    // console.log({hoursNumber: Number(hours)});
    // console.log({sum: Number(hours) + 12});
    // console.log({sumString: (Number(hours) + 12).toString()});
    // Convert hours to 24-hour format
    // const hour24 = amPm === 'a. m.' ? hours : (Number(hours) + 12).toString();
    // const hour24 = amPm === 'a. m.' && hours === '12' ? '00' : (Number(hours) + (amPm === 'a. m.' ? 0 : 12)).toString();
    // const hour24 = amPm === 'a. m.' && hours === '12' ? '00' : (Number(hours) + (amPm === 'a. m.' ? 0 : 12)).toString();
    // const hour24 = amPm === 'a. m.' && hours === '12' ? '00' : (Number(hours) + (amPm === 'a. m.' ? 0 : 12)).toString();
    const hour24 = amPm === 'a. m.' && hours === '12' ? '00' : (Number(hours) + (amPm === 'p. m.' ? 12 : 0)).toString();

    // console.log((hour24))
    const formattedMonth = month.length === 1 ? `0${month}` : month;
    const formattedDay = day.length === 1 ? `0${day}` : day;
    const formattedSeconds = seconds.length === 1 ? `0${seconds}` : seconds;

    // Create a new ISO date string
    return `${year}-${formattedMonth}-${formattedDay}T${hour24}:${minutes}:${formattedSeconds}.000Z`;
}

export function formatDaysMonthYear(date: string, separator: string) {
    const year = date.split('-')[0];
    const month = date.split('-')[1];
    const day = date.split('-')[2];
    return `${day}${separator}${month}${separator}${year}`;
}

export function formatTime(time: string) {
    const hours = time.split(':')[0];
    const minutes = time.split(':')[1];
    const seconds = time.split(':')[2];

    if (Number(hours) > 12) {
        return `${Number(hours) - 12}:${minutes}:${seconds} PM`;
    }
    return `${hours}:${minutes}:${seconds} AM`;
}

