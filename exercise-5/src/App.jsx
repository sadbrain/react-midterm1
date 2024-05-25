import Card from "./components/Card";
import { AVAILABLE_USER } from "./data";
function App() {
  return <>
      <header>
      <h1>My Users</h1>
    <div className="cards-view">
      <div className="cards-grid">
        {AVAILABLE_USER.map((u, i) => (
            <Card key={i} {...u}/>

        ))}
      </div>
    </div>
    </header>
  </>;
}

export default App;
