function shownDate() {
    let date = new Date();
    return {
        hour: date.getUTCHours() + 3,
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        day: date.getUTCDay(),
        month: date.getUTCMonth(),
        monthDay: date.getUTCDate(),
        year: date.getFullYear(),
    }
}

export {
    shownDate
}