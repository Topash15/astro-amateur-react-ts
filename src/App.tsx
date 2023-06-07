import { Routes, Route } from "react-router-dom";
import { Query, QueryClient, QueryClientProvider } from "react-query";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Photos />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
