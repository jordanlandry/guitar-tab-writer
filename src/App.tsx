import { useState } from "react";
import SongPage from "./components/SongPage";
import TabPage from "./components/TabPage";
import "./styles.css";

function App() {
  const [activePage, setActivePage] = useState(0); // Temp for testing
  return <div className="App">{activePage === 0 ? <SongPage setActivePage={setActivePage} /> : <TabPage />}</div>;
}

export default App;
