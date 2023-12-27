type notableTime = {
    title: string,
    time: number
}

type TimerSubmit = {
    name:string,
    time1:notableTime,    
    time2?:notableTime,
    time3?:notableTime,
    time4?:notableTime,
    time5?:notableTime
}
export default TimerSubmit