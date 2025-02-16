import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("http://localhost:3000/names");
    setUserName(response.data);
  };
  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
