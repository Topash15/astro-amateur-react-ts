import { useEffect } from "react";
import Stopwatch from "../../components/Stopwatch";
import './style.css'

function Timer() {

    // fetch all launches within next week
    // use Launch Library 2 API
    const launches: string[] = ['falcon heavy', 'electron', 'atlas v']
    // fetch launch NET time

    useEffect(() => {
        console.log(Notification.permission);
        if (Notification.permission === 'granted') {
            const n = new Notification("Test Notice", { body: 'This is the test text' });
            setTimeout(
                () => { n.close },
                5000
            )
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((result) => {
                const n = new Notification("Test Notice", { body: 'This is the test text' });
                setTimeout(
                    () => { n.close },
                    5000
                )
            });
        }
    })

    return (
        <main>
            <h2>Timer</h2>
            <form>
                <label>Select Launch:</label>
                <select>{launches.map((launch) => <option key={launch}>{launch}</option>)}</select>
                <fieldset>
                    <legend>Notable Times:</legend>
                    <label>Event Name</label><input></input>
                    <br />
                    <label>T+ (Seconds)</label><input></input>
                </fieldset>
                <button>Start</button>
            </form>
            {/* if current time > launch NET and form submitted, display Timer */}
            {/* pass launchNET as prop to timer */}
            <Stopwatch formInfo={{ name: "TestLaunch", time1: { title: 'Booster Separation', time: 5 } }} />
        </main>
    );
}

export default Timer;
