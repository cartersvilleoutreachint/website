export default function getFormattedTime(date: number): string{
    
    const dateObj = new Date(date);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const dayPostFixes = {
        st: [
            1,21,31
        ],
        nd: [
            2,22
        ],
        rd: [
            3,23
        ],
        th: [
            4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,24,25,26,27,28,29,30
        ]
    }

   
    const year = dateObj.getFullYear()
    const month = monthNames[dateObj.getMonth()]
    const dayName = dayNames[dateObj.getDay()]
    const dayNum = dateObj.getDate()
    let dayPostFix = ""
    let hour = dateObj.getHours()
    let hourPostFix = "am"
    const minutes = (dateObj.getMinutes()).toLocaleString("en-us",{minimumIntegerDigits: 2})

    for(const keys in dayPostFixes){
        //@ts-ignore
        if(dayPostFixes[keys].includes(dayNum)){
            dayPostFix = keys;
            break
        }
    }

    if((hour >= 12) && hour != 24){
        hourPostFix = "pm"
    }

    if(hour > 12){
        hour = hour - 12;
    }


    
    
    return `${dayName}, ${month} ${dayNum}${dayPostFix} ${year} @ ${hour}:${minutes}${hourPostFix}`
}