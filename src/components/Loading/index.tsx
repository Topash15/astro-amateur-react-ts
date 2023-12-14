import "./style.css";
import { useState } from "react";

function Loading(props: { status: string; }) {
  const [go, setGo] = useState(-1);
  const [active, setActive] = useState(0);

  let status: string = props.status || 'loading';

  const polls: string[] = [
    'PDL', 'MILA', 'Dryden', 'Wallops', 'Marshall', 'Goddard Ops'
  ];

  const goNogo = (): void => {
    console.log('goNogo', { 'go': go, 'active': active })
    if (go === polls.length - 1 && active >= polls.length -1) {
      // console.log(status);
      if (status === 'loading') {
        setActive(-1);
        return;
      }
    }
    setTimeout(() => {
      if (go !== active) {
        setGo(active);
        // console.log({ 'go': go })
      }
      setTimeout(() => {
        if(active < polls.length){
          setActive(active + 1);
        }
        // console.log({ 'active': active })
      }, 500)
    }, 1500)
  }

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
          <div className="row" key={poll}>
            <div className={active === index ? `active` : ``}>{poll}</div>
            <div className={`${index} ${go >= index ? `go` : ``} `}>Go</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;