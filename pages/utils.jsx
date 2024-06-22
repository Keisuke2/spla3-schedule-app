// 日付と時間を整形する関数
export function FormatDate(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const startDate = start.getDate();
    const endDate = end.getDate();

    let formattedStartTime = '';
    let formattedEndTime = '';

    if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth() && startDate === endDate) {
        // 年と日が同じ場合（同じ日付）
        // startTime: 2024-06-22T17:00:00+09:00、endTime: 2024-06-22T19:00:00+09:00 -> return 6/22 17:00 - 19:00
        formattedStartTime = `${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    }
    else if (start.getFullYear() === end.getFullYear()) {
        // 年は同じだが、日が違う場合
        // startTime: 2024-06-22T23:00:00+09:00、endTime: 2024-06-23T01:00:00+09:00 -> return 6/22 23:00 - 6/23 1:00
        formattedStartTime = `${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getMonth() + 1}/${endDate} ${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    } else {
        // 年も日も違う場合
        // startTime: 2024-12-31T23:00:00+09:00、endTime: 2025-01-01T01:00:00+09:00 -> return 2024/12/31 23:00 - 2025/1/1 1:00
        formattedStartTime = `${start.getFullYear()}/${start.getMonth() + 1}/${startDate} ${start.getHours()}:${String(start.getMinutes()).padStart(2, '0')}`;
        formattedEndTime = `${end.getFullYear()}/${end.getMonth() + 1}/${endDate} ${end.getHours()}:${String(end.getMinutes()).padStart(2, '0')}`;
    }

    return `${formattedStartTime} - ${formattedEndTime}`;
}

// startTime と endTime が過去の場合
function isPast(startTime, endTime) {
    const now = new Date();
    const ednDate = new Date(startTime)
    const endDate = new Date(endTime);
    return ednDate < now && endDate < now;
}

// startTimeが過去であり、endTime が未来の場合
function isCurrentTimeBetween(startTime, endTime) {
    const now = new Date();
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    return now >= startDate && now <= endDate;
}

// startTime と endTime が未来の場合
function isFuture(startTime, endTime) {
    const now = new Date();
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    return startDate > now && endDate > now;
}

// 受け取ったデータをいくつ返すか決め、その分のデータを返す関数
// 過去のデータは返さないようにする
export function FilterData(jsonData, maxDisplayedItems) {
    let displayedItems = 0;
    const filteredData = [];

    jsonData.forEach((item) => {
        if (isPast(item.start_time, item.end_time) && !isCurrentTimeBetween(item.start_time, item.end_time)) {
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