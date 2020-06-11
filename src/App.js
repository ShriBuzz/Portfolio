import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Mobile from "./mobile/views/mainView";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Fotter from "./sections/Fotter";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#098a8a",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#fff",
      // dark: will be calculated from palette.secondary.main,
    },
  },
});

function App() {
  const [active, setActive] = useState(1);
  const [scrollTop, setScrollTop] = useState(0);
  const [data, setData] = useState();

  function getData() {
    fetch("https://api.github.com/users/shribuzz")
      .then((res) => res.json())
      .then(function (data) {
        setData(data);
      });
  }

  useEffect(() => {
    getData();
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);
    if (scrollTop < 320) {
      setActive(1);
    }
    if (scrollTop >= 320) {
      setActive(2);
    }
    if (scrollTop >= 950) {
      setActive(3);
    }
  }, [scrollTop]);

  if (window.innerWidth < 480) {
    return (
      <ThemeProvider theme={theme}>
        <Mobile userData={data} active={active} setActive={setActive} />
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar positon={scrollTop} active={active} setActive={setActive} />
        <div id="Home">
          <Home userData={data} />
        </div>
        <div id="Skill">
          <Skills />
        </div>
        <div id="Project">
          <Projects />
        </div>
        <Fotter />
      </ThemeProvider>
    </>
  );
}

export default App;
