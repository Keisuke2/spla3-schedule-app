

export function FormatDate(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startDate = start.getDate();
    const endDate = end.getDate();

    let formattedStartTime = '';
    let formattedEndTime = '';

    // 年と日が同じ場合
    if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && startDate === endDate) {
        formattedStartTime = `${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    } else if (start.getFullYear() === end.getFullYear()) {
        formattedStartTime = `${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getMonth() + 1}/${endDate} ${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    } else {
        formattedStartTime = `${start.getFullYear()}/${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getFullYear()}/${end.getMonth() + 1}/${endDate} ${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    }

    return `${formattedStartTime} - ${formattedEndTime}`;
}

function isPast(start_time) {
    const now = new Date();
    const startTime = new Date(start_time);
    return startTime <= now;
}

function isCurrentTimeBetween(start_time, end_time) {
    const now = new Date();
    const startTime = new Date(start_time);
    const endTime = new Date(end_time);
    return now >= startTime && now <= endTime;
}

function isFuture(start_time, end_time) {
    const now = new Date();
    const startTime = new Date(start_time);
    const endTime = new Date(end_time);
    return startTime > now && endTime > now;
}

export function FilterAndDisplayData(jsonData, maxDisplayedItems) {
    let displayedItems = 0;
    const filteredData = [];

    jsonData.forEach((item) => {
        if (isPast(item.start_time) && !isCurrentTimeBetween(item.start_time, item.end_time)) {
            return;
        } else if (isCurrentTimeBetween(item.start_time, item.end_time)) {
            filteredData.push(item);
            displayedItems++;
        } else if (isFuture(item.start_time, item.end_time)) {
            if (displayedItems < maxDisplayedItems) {
                filteredData.push(item);
                displayedItems++;
            }
        }
    });

    return filteredData;
}