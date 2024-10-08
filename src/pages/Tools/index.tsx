import './style.css';
import { useState } from 'react';

function Tools(){
    const [map, setMap] = useState('hidden');
    const [flightClub, setFlightClub] = useState('hidden');

    const toggleView = (tool: string):undefined => {
        switch(tool){
            case "map":
                if(map === 'hidden'){
                    setMap('visible');
                } else {
                    setMap('hidden');
                }
                break;
            case "flightClub":
                if(flightClub === 'hidden'){
                    setFlightClub('visible');
                } else {
                    setFlightClub('hidden');
                }
                break;                
        }
    }

    return(
        <>
        <h2>Tools</h2>
        <p>Here's a collection of some useful tools that I use in my photography.</p>
        <section className="tool-box">
            <ul>
                <li className={map}>
                    <button className={`toggle-btn`} onClick={()=>toggleView('map')}>Distance Map</button>
                    <div className="tool-body">
                        <p>
                            This map shows some of the areas that I have watched and photographed launches from. You can toggle which rockets you want to watch (SpaceX, ULA, SLS) and see the line-of-sight and distance to the launch pads and landing pads. Clicking on the colored line with show the exact distance.
                        </p>
                        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1xDrzjBNwGgKcq-BFHQGtEMy2S-H7J7kQ&ehbc=2E312F&noprof=1" width="100%" height="1000"></iframe>
                    </div>
                </li>
                <li>
                    <li className={flightClub}>
                        <button className='toggle-btn' onClick={()=>toggleView('flightClub')}>FlightClub.io</button>
                        <div className="tool-body">
                            <p>
                                FlightClub.io is a subscription-based website that is very useful for setting up long exposure shots. It allows you to set a location and view on a Google Earth map. The sun and moon will also be displayed so it can be used to get a transit photo. 
                                <br/>
                                If you pay for the second tier, you can also input your camera sensor and lens to get an accurate viewpoint. There's nothing worse than setting up your camera and having the rocket fly out of frame!
                                <br/><br/>
                                <a href="https://flightclub.io" target="_blank">Click Here to go to FlightClub.io</a>
                            </p>
                        </div>
                    </li>
                </li>

            </ul>
        </section>
        </>
    )
}

export default Tools;