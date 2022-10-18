import { Route, Routes } from "react-router-dom";
import Devider from "./components/ui/Devider";
import HomePage from "./pages/HomePage/Index";
import ProductDetail from "./pages/ProductDetail/Index";
import SubcatalogPage from "./pages/Subcatalog/Index";
import Products from "./pages/Products/Index";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/catalog/:id" element={<SubcatalogPage />} />
      <Route path="/products/:id" element={<Products />} />
      {/* <Route path="/:catalog/:subcatalog" element={<ProductDetail />} /> */}
      <Route path="/details/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
