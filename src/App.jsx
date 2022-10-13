import './App.scss';
import AppCard from './components/AppCard/AppCard';
import team from "./data/team.js"

function App() {
  console.log(team);
  return (
    <div className="app">
        <h1 className="app__title">Ticket Tracker</h1>
        <div className="app__container">
          <AppCard cardsArr={team} />
        </div>
    </div>
  );
}

export default App;
