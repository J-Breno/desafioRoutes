import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Products from "./routes/Products";
import NotFound from "./routes/NotFound";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Books from "./routes/Products/Books";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path="/products/computers" element={<Computers />} />
            <Route path="/products/electronics" element={<Electronics />} />
            <Route path="/products/books" element={<Books />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
