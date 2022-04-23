import backgroundImg from "./assets/bg-intro-desktop.png";
import { useState } from "react";
import styles from "./styles/App.module.css";

function App() {
  const [allowSubmit, setSubmit] = useState(true);
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    container,
    backgroundContainer,
    pageContent,
    pageInfo,
    trialContainer,
    formContainer,
    termsAndServices,
    attribution,
  } = styles;

  const trySubmit = () => {
    setSubmit(
      firstname !== "" && lastName !== "" && email !== "" && password !== ""
    );
  };
  return (
    <>
      <main className={container}>
        <div className={backgroundContainer}>
          <img src={backgroundImg} alt="background" />
        </div>
        <div className={pageContent}>
          <div className={pageInfo}>
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className={trialContainer}>
            <header>
              <div>
                Try it free 7 days <span>then $20/mo. thereafter</span>
              </div>
            </header>

            <div className={formContainer}>
              <div>
                <input
                  style={
                    firstname || allowSubmit
                      ? { border: "1px solid lightgray" }
                      : { border: "2px solid red" }
                  }
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  required
                  placeholder="First Name"
                />
                <p
                  style={
                    firstname || allowSubmit
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  First Name cannot be empty
                </p>
              </div>
              <div>
                <input
                  style={
                    lastName || allowSubmit
                      ? { border: "1px solid lightgray" }
                      : { border: "2px solid red" }
                  }
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  required
                  placeholder="Last Name"
                />
                <p
                  style={
                    lastName || allowSubmit
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  Last Name Cannot be empty
                </p>
              </div>
              <div>
                <input
                  style={
                    email || allowSubmit
                      ? { border: "1px solid lightgray" }
                      : { border: "2px solid red" }
                  }
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Email Address"
                />
                <p
                  style={
                    email || allowSubmit
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  Email Cannot be empty
                </p>
              </div>

              <div>
                <input
                  style={
                    password || allowSubmit
                      ? { border: "1px solid lightgray" }
                      : { border: "2px solid red" }
                  }
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  placeholder="Password"
                />
                <p
                  style={
                    password || allowSubmit
                      ? { visibility: "hidden" }
                      : { visibility: "visible" }
                  }
                >
                  Password Cannot be empty
                </p>
              </div>
              <button onClick={() => trySubmit()}>Claim yout free Trial</button>
              <p className={termsAndServices}>
                By clicking the button, you are agreeing to our{" "}
                <a href="/">Terms and Services</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className={attribution}>
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
      </footer>
    </>
  );
}

export default App;
