import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
const root = createRoot(document.getElementById("root") as HTMLElement); // createRoot(container!) if you use TypeScript
root.render(<App />);
