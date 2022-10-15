import { Route, Routes } from "react-router-dom";
import Devider from "./components/ui/Devider";
import HomePage from "./pages/HomePage/Index";
import ProductDetail from "./pages/ProductDetail/Index";
import SubcatalogPage from "./pages/Subcatalog/Index";

function App() {
  return (  
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:catalog" element={<SubcatalogPage />} />
      {/* <Route path="/:catalog/:subcatalog" element={<ProductDetail />} /> */}
      <Route path="/:catalog/:subcatalog/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
