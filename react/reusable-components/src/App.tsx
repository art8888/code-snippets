import ScrollToTopButton from "./components/ScrollToTopButton";
import { useLogs } from "./hooks/useLogs";

function App() {
  const { logs, addLogEntry } = useLogs();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => addLogEntry("Button clicked", "info")}>
          Add log
        </button>

        {logs.map((log, index) => (
          <div key={index}>
            [{log.time}] [{log.type}] {log.text}
          </div>
        ))}
      </header>

      <ScrollToTopButton />
    </div>
  );
}

export default App;