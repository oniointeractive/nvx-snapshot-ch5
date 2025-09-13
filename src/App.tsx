/* eslint-disable @typescript-eslint/no-explicit-any */
// import "./App.css";
import "@crestron/ch5-theme/output/themes/light-theme.css";

function App() {
  return (
    // Full-viewport wrapper that centers content
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "grid",
        placeItems: "center",
      }}
    >
      <ch5-background
        backgroundColor="#595959"
        style={{ position: "fixed", inset: 0 }}
      ></ch5-background>

      <ch5-video
        url="http://192.168.1.101:8080/streams/stream1"
        userId={"video"}
        size="regular"
        stretch={true}
        aspectRatio="16:9"
        sourceType="Network"
        snapshotRefreshRate={1}
        snapshotURL="http://192.168.1.101:8080/streams/stream1"
        style={{
          width: "min(90vw, 1280px)",
          height: "auto",
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0,0,0,.25)",
        }}
        receiveStatePlay="Paste the logic for receiving the play state here"
      ></ch5-video>
    </div>
  );
}

export default App;
