import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Notes from "./pages/Notes";
import Corpus from "./pages/Corpus";
import Speculations from "./pages/Speculations";
import Principles from "./pages/Principles";
import NotFound from "./pages/NotFound";
import Shcaa from "./pages/Shcaa";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/corpus" element={<Corpus />} />
        <Route path="/chronicles" element={<Speculations />} />
        <Route path="/principles" element={<Principles />} />
        <Route path="/shcaa" element={<Shcaa />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
