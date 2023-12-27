import { useEffect } from "react";
import Stopwatch from "../../components/Stopwatch";
import './style.css'

function Timer() {

    // fetch all launches within next week
    const launches: string[] = ['falcon heavy', 'electron', 'atlas v']
    // fetch launch NET time

    useEffect(()=>{
        if(Notification.permission !== 'denied'){
            Notification.requestPermission().then((result) => {
                console.log(result);
              });
        }
    })

    return (
        <main>
            <h2>Timer</h2>
            <form>
                <label>Select Launch:</label><select>{launches.map((launch) => <option>{launch}</option>)}</select>
                <fieldset>
                    <legend>Notable Times:</legend>
                    <label>Event Name</label><input></input>
                    <br/>
                    <label>T+ (Seconds)</label><input></input>
                </fieldset>
                <button>Start</button>
            </form>
            {/* if current time > launch NET and form submitted, display Timer */}
            {/* pass launchNET as prop to timer */}
            <Stopwatch formInfo={{ name: "TestLaunch", time1: {title: 'Booster Separation', time: 5} }} />
        </main>
    );
}

export default Timer;
