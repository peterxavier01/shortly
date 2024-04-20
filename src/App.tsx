import "./App.css";
import Layout from "./components/layout";
import FormContainer from "./components/FormContainer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Button from "./components/Button";

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
          <h4>Boost your links today</h4>
          <Button>Get started</Button>
        </section>
      </main>
    </Layout>
  );
}

export default App;
