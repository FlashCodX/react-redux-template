import styles from "./styles/App.module.css";
const ilustration =
  require("./assets/illustration-woman-online-desktop.svg").default;

const ilustrationBox = require("./assets/illustration-box-desktop.svg").default;
const cardBG = require("./assets/bg-pattern-desktop.svg").default;

function App() {
  const {
    container,
    card,
    leftContainer,
    boxWrapper,
    cardContent,
    faqs,
    faqContainer,
    title,
    attribution,
  } = styles;
  return (
    <>
      <main className={container}>
        <div className={card}>
          <div className={boxWrapper}>
            <img src={ilustrationBox} alt="ilustration" />
            <div className={cardContent}>
              <div className={leftContainer}>
                <img src={cardBG} alt="background" />
                <img src={ilustration} alt="ilustration" />
              </div>
              <div className={faqContainer}>
                <h1 className={title}>FAQ</h1>
                <div className={faqs}>
                  <details>
                    <summary>How many team members can I invite?</summary>
                    <div>
                      {" "}
                      You can invite up to 2 additional users on the Free plan.
                      There is no limit on team members for the Premium plan.
                    </div>
                  </details>
                  <details>
                    <summary>What is the maximum file upload size?</summary>
                    <div>
                      {" "}
                      No more than 2GB. All files in your account must fit your
                      allotted storage space.
                    </div>
                  </details>
                  <details>
                    <summary>How do I reset my password?</summary>
                    <div>
                      {" "}
                      Click “Forgot password” from the login page or “Change
                      password” from your profile page. A reset link will be
                      emailed to you.
                    </div>
                  </details>
                  <details>
                    <summary>Can I cancel my subscription?</summary>
                    <div>
                      {" "}
                      Yes! Send us a message and we’ll process your request no
                      questions asked.
                    </div>
                  </details>
                  <details>
                    <summary>Do you provide additional support?</summary>
                    <div>
                      {" "}
                      Chat and email support is available 24/7. Phone lines are
                      open during normal business hours.
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className={attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam"
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
