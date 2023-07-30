import "./style.css";

function Loading() {
  return (
    <div className="loading">
      <p>
        Our servers shutdown when inactive. Please wait for them to start up.
      </p>
      <div id="loading-bar-container">
        <span id="loading-bar"></span>
      </div>
    </div>
  );
}

export default Loading;