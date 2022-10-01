import "./App.css";
import Testimonial from "./components/Testimonial";
import Button from "@mui/material/Button";

function App() {
  function handleClick() {
    console.log("Click me!");
  }

  const now = new Date();

  return (
    <div className="App">
      <h1>TODAY: {now.toDateString()}</h1>
      <div>
        <Testimonial
          name={"Pranav"}
          content={
            "Aggie Coding Club is the greatest club that has ever existed. EVER"
          }
          review={"15/10"}
          date={"9/30/2022"}
        />
        <Testimonial
          name={"Jad"}
          content={"I concur with Pranav"}
          review={"30/10"}
          date={"9/30/2022"}
        />
      </div>
      <Button variant="contained" onClick={handleClick}>
        HELLO!!!
      </Button>
    </div>
  );
}

export default App;
