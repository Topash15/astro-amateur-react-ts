import { useEffect, useState } from 'react'
import TimerSubmit from '../../types/TimerSubmit';

function Stopwatch(props: { formInfo: TimerSubmit }) {
    const [time, setTime] = useState(0);
    const [launchNET, setLaunchNET] = useState(0);
    const [time1, setTime1] = useState('');
    const [time2, setTime2] = useState('');
    const [time3, setTime3] = useState('');
    const [time4, setTime4] = useState('');
    const [time5, setTime5] = useState('');

    useEffect(() => {

        // const stopwatchWorker: Worker = new Worker('../../web-workers/stopwatch');
        // stopwatchWorker.postMessage('start');


        // DEBUG TIME
        setLaunchNET(Date.now());

        const timeHandler = setInterval(() => {
            setTime(time + 1);
            // console.log({ newTime: time });
        }, 1000);



        switch (time) {
            case props.formInfo.time1.time:
                setTime1(props.formInfo.time1.title);
                const time1Notice = new Notification('Rocket Timer', {body: 'props.formInfo.time1.title', icon: '../../../android-chrome-192x192.png'})
                setTimeout(() => {
                    setTime1('');
                    time1Notice.close();
                }, 5000);
                break;
            case props.formInfo.time2?.time:
                setTime2(props.formInfo.time2?.title || 'NOTABLE TIME');
                setTimeout(() => {
                    setTime2('');
                }, 5000);
                break;
            case props.formInfo.time3?.time:
                setTime3(props.formInfo.time3?.title || 'NOTABLE TIME');
                setTimeout(() => {
                    setTime3('');
                }, 5000);
                break;
            case props.formInfo.time4?.time:
                setTime4(props.formInfo.time4?.title || 'NOTABLE TIME');
                setTimeout(() => {
                    setTime4('');
                }, 5000);
                break;
            case props.formInfo.time5?.time:
                setTime5(props.formInfo.time5?.title || 'NOTABLE TIME');
                setTimeout(() => {
                    setTime5('');
                }, 5000);
                break;
        }

        return () => clearInterval(timeHandler);
    })

    let minutes: number = Math.floor(time / 60);
    let seconds: number = Math.floor(time % 60);

    return (
        <div>
            <div>
                <span>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</span>
                {time1 ? <b>{time1}</b> : null}
                {time2 ? <b>{time2}</b> : null}
                {time3 ? <b>{time3}</b> : null}
            </div>
        </div>
    )
}

export default Stopwatch;
