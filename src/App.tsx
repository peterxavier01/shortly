import "./App.css";
import Layout from "./components/layout";
import FormContainer from "./components/FormContainer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Button from "./components/Button";
import { m } from "framer-motion";
import { ctaVariants } from "./lib/animations";

function App() {
  return (
    <Layout>
      <main id="main">
        <Hero />

        <section className="form-section">
          <FormContainer />
          <Stats />
        </section>

        <section className="boost-section">
          <m.div
            variants={ctaVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4>Boost your links today</h4>
            <Button>Get started</Button>
          </m.div>
        </section>
      </main>
    </Layout>
  );
}

export default App;
