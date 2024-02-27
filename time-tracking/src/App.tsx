import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Perfil from "./components/Perfil";
import { modeTime, tracking } from "./type";

function App() {
  const [mode, setMode] = useState<modeTime>("weekly");
  const [data, setdata] = useState<tracking[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("data.json");
      const data: tracking[] = await response.json();
      setdata(data);
    }

    getData();
  }, []);

  return (
    <main className="container">
      <Perfil mode={mode} setMode={setMode} />
      {data.map((item) => (
        <Card item={item} mode={mode} />
      ))}
    </main>
  );
}

export default App;
