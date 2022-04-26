import styles from "../styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

function App() {
  const { container } = styles;
  const dispatch = useDispatch();
  const { appTheme }: any = useSelector((state) => state);
  const { setAppTheme } = bindActionCreators(actionCreators, dispatch);

  return (
    <>
      <main className={`${container}`}>CONTENT HERE</main>
      <Footer />
    </>
  );
}

export default App;
