import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Default from "./pages/Default";

function App() {
  // const [data, setData] = React.useState("hello data");
  // React.useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(res=>res.json())
  //   .then(data => setData(data.title));
  // }, []);

  return (
    <>
      <NavigationBar />
      <Sidebar/>
      <Default/>
      {/* <p>{!data ? "Loading..." : data}</p> */}
    </>
  );
}

export default App;
