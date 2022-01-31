import Intro from "./components/Intro/Intro";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import GlobalStyles from "./styles/GlobalStyle";
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Menu />
      <Intro />
      <Projects />
      <Technologies />
      <Contact />
    </>
  );
};

export default App;
