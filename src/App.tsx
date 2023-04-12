import type { Component } from "solid-js";
import Chip from "./uikit/chip/Chip";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { ThemeProvider } from "./uikit/themeProvider/ThemeProvider";

const App: Component = () => {
  return (
    <ThemeProvider theme={"light"}>
      <div class={styles.App}>
        <header class={styles.header}>
          <img src={logo} class={styles.logo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
          <Chip as={"a"}>Test Chip</Chip>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
