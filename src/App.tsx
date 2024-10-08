import { Routes, Route } from "react-router-dom";
import { Query, QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Debug from "./pages/Debug";
import Navbar from "./components/Navbar";
import Timer from './pages/Timer';
import Tools from "./pages/Tools";
import Footer from './components/Footer';
import "./App.css";
import PhotoDetails from "./pages/PhotoDetails";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <section className="body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos/:category?" element={<Photos />} />
            <Route path="/photos/id/:id" element={<PhotoDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/debug" element={<Debug />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </section>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
