const nths = (day) => {
    if(day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

const formatDate = (date, format) => {
    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" 
    ]

    const day = date.getDate();
    const monthIndex = date.getMonth()+1;
    const dayIndex = date.getDay();
    const year = date.getFullYear();
    const nth = nths(day);
    
    let formattedDate;
    if (format == 'dd/mm/yyyy') {
        formattedDate = `${day}/${monthIndex}/${year}`;
    } else if (format == 'mm/dd/yyyy') {
        formattedDate = `${monthIndex}/${day}/${year}`;
    } else if (format == 'yyyy/mm/dd') {
        formattedDate = `${year}/${monthIndex}/${day}`;
    } else if (format == 'others') {
        formattedDate = days[dayIndex]+' '+day+nth+' of '+months[monthIndex]+', '+year;
    } else {
        formattedDate = 'Format is invalid';
    }
    return formattedDate
}

const formatTime = (time, format) => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    if(minutes < 10) minutes = "0" + minutes;
    // if(hours < 10) hours = "0" + hours;
    
    let result;
    if(format == '24h') {
        result = `${hours}:${minutes}`;
    } else if(format == '12h') {
        let ampm = "am";
        if(hours > 12) {
            hours -= 12;
            ampm = "pm";
        }
        result = `${hours}:${minutes} ${ampm}`;
    }
    return result;
}

module.exports = {
    formatDate,
    formatTime
}