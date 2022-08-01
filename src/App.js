import logo from './logo.svg';
import './App.css';
import Menu from "./Menu";

function App() {


  const user = {
    firstname: 'James',
    lastname: "John",
    email: "james@email.com"
  }

  const active_note = {
      title: "Happiness",
      content: "Happiness is free"
  }

  function getMenuItems(data){
      alert(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Menu getMenuProp={getMenuItems} userobject={user} noteobject={active_note}/>
      </header>
    </div>
  );
}

export default App;
