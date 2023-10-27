import { ChakraProvider } from "@chakra-ui/react";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";

import Header from "./components/Header";
import { AlertProvider } from "./context/alertContex";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
