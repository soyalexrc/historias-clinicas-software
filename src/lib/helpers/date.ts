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
