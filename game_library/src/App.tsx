import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisable, setAleterVisability] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAleterVisability(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAleterVisability(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
