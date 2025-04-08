let countdown

function update_time(time) {
    const millisecond = parseInt((time%1000))

    const rawTime = time/1000
    const second = parseInt(rawTime%60)
    const minute = parseInt((rawTime/60)%60)
    const hour = parseInt(((rawTime/60)/60)%60)
    const day = parseInt(((rawTime/3600)/24)%60)

    Millisecond.innerHTML = formatTime(millisecond)
    Second.innerHTML = formatTime(second)
    Minute.innerHTML = formatTime(minute)
    Hour.innerHTML = formatTime(hour)

    Day.innerHTML = formatTime(day)
}

function formatTime(time){
    return time < 10 ? ( time >= 0 ? `0${time}` : 0) : time
}

function start_countdown() {
    const date_field = document.getElementById("DateField")
    const date = date_field.value

    // if(date === null) return
    console.log(`${typeof(date)} | ${new Date(date) < 0}`)

    if(countdown) stop_countdown()
    date_field.valueAsDate = null

    countdown = setInterval(() => {
        start_timer("10 Apr 2025")
    }, 1)
}

function start_timer(date) {
    if(date == NaN || date == undefined) return

    const endDate = new Date(date)
    const currentDate = new Date()

    const leftOverTime = endDate - currentDate

    if(leftOverTime < 0) {
        stop_countdown();
        return
    }

    update_time(leftOverTime)
}

function stop_countdown() {
    clearInterval(countdown)
    update_time(0)

    countdown = undefined
}
