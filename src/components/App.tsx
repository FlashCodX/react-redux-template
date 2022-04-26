import styles from "../styles/App.module.css";
import { useSelector } from "react-redux";
import Footer from "./Footer";

function App() {
  const { container } = styles;
  const { appTheme }: any = useSelector((state) => state);

  return (
    <>
      <main className={`${container}`}>CONTENT HERE</main>
      <Footer />
    </>
  );
}

export default App;
