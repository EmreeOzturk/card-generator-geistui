import "./App.css";
import CardGenerator from "./components/CardGenerator";
import { Grid } from "@geist-ui/core";
function App() {
  return (
    <Grid.Container gap={1}  justify="center">
      <h1>Card Generator App</h1>
      <Grid xs={18} justify="center"  >
        <CardGenerator  />
      </Grid>
    </Grid.Container>
  );
}

export default App;
