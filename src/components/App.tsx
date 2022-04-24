import styles from "../styles/App.module.css";

function App() {
  const { container, attribution } = styles;

  return (
    <>
      <main className={container}>CONTENT HERE</main>

      {/* <footer className={attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://www.linkedin.com/in/luispintodev/"
          target="_blank"
          rel="noreferrer"
        >
          Luís Pinto
        </a>
        .
      </footer> */}
    </>
  );
}

export default App;
