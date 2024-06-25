function getAllTime(schedule) {
    const timeArray = new Array().fill([]);
    for (let i = 0; i < 2; i++) {
        list[i] = [];
    }

    schedule.result.event.map((item) => (
        timeArray[0].push(item.time)
    ))
}