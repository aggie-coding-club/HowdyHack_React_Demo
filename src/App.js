import "./App.css";

function Testimonial({ name, content, review, date }) {
  const styling = {
    border: "1px solid black",
    margin: "10px 10vw",
    padding: "10px 0",
  };
  return (
    <div style={styling}>
      <h2>
        {name}: {date}
      </h2>
      <h3>⭐Stars⭐: {review}</h3>
      <div>{content}</div>
    </div>
  );
}

function App() {
  const now = new Date();
  return (
    <div className="App">
      <h1>TODAY: {now.toDateString()}</h1>
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
  );
}

export default App;
