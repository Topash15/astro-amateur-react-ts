import "./style.css";
import { useState } from "react";

async function Loading() {
  const [go, setGo] = useState(-1);
  const [active, setActive] = useState(-1);

  const polls: string[] = [
    'PDL', 'MILA', 'Dryden', 'Wallops', 'Marshall', 'Goddard Ops'
  ];

  const goNogo = ():any=>{
    if(go !== active){
      setGo(active);
    }
    if(go !== polls.length -1) {
      setActive(active + 1);
    }
  }

  const timeout = async (delay: number) => {
      return new Promise( res => setTimeout(res, delay) );
  }
  await timeout(5000);
  
  goNogo();

  return (
    <div className="loading">
      <p>
        Our servers will shut down automatically if they are inactive for too long. It may take a couple minutes to start back up. Standby for liftoff.
      </p>
      {/* <div id="loading-bar-container">
        <span id="loading-bar"></span>
      </div> */}
      <div id="loading-chart">
        {polls.map((poll, index) => (
          <>
            <div className={active === index ? `active` : ``} key={index}>{poll}</div>
            <div className={go >= index ? `go` : ``}>Go</div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Loading;