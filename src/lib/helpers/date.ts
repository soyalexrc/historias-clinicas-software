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

