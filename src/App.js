import {useState} from "react";


function App() {
  const [year, setYear] = useState(2050);
  const [manager, setManager] = useState ("Gulmira");
  const [status, setStatus ] = useState("Open");

  return (
    <>
    <div>
      <h1>{year}</h1>
      <button onClick={() => setYear(year + 1)}>New Year!</button>
    </div>
    <div>
      <h1>Manager on duty: {manager}</h1>
      <button onClick={() => setManager("Rachel")}>New Manager</button>
    </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Back in 5")}>Break</button>
    </div>
    </>
  );
}

export default App;
