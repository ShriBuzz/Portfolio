import React, { useState, useRef, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Fotter from "./sections/Fotter";

const scrollToHome = (ref) => window.scrollTo(0, ref.current.offsetTop);
const scrollToSkill = (ref) => window.scrollTo(0, ref.current.offsetTop);
const scrollToProjects = (ref) => window.scrollTo(0, ref.current.offsetTop);

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#098a8a",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#A7A7A7",
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

  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projRef = useRef(null);
  const ScrollHome = () => scrollToHome(homeRef);
  const ScrollSkill = () => scrollToSkill(skillRef);
  const ScrollProject = () => scrollToProjects(projRef);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar
          positon={scrollTop}
          active={active}
          setActive={setActive}
          onHome={ScrollHome}
          onSkill={ScrollSkill}
          onProject={ScrollProject}
        />
        <div id="Home" ref={homeRef}>
          <Home userData={data} />
        </div>
        <div id="Skill" ref={skillRef}>
          <Skills />
        </div>
        <div id="Project" ref={projRef}>
          <Projects />
        </div>
        <Fotter />
      </ThemeProvider>
    </>
  );
}

export default App;
