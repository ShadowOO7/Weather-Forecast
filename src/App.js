import {useEffect} from "react"
import './App.css';
import Cart from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import {useWeather} from "./context/Weather"


function App() {
  const weather = useWeather();

  useEffect (() => {
    weather.fetchCurrentUserLocationData();
  },[])

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search"/>
      <Cart />
      <Button onClick={weather.fetchCurrentUserLocationData} value="Refresh"/>
    </div>
  );
}

export default App;
