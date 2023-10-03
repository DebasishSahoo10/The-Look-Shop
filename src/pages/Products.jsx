import { Logo } from "../components/Logo/Logo";
import { Nav } from "../components/Nav/Nav";
import { CategoryFilter } from "../components/Filters/CategoryFilter";
import { ClearButton } from "../components/Filters/ClearButton";
import { GenderFilter } from "../components/Filters/GenderFilter";
import { PriceSort } from "../components/Filters/PriceSort";
import { RatingSlider } from "../components/Filters/RatingSlider";
import { ProductList } from "../components/ProductList/ProductList";
import { SearchBar } from "../components/Filters/SearchBar";

const Products = () => {
  return (
    <div style={{ display: "grid" }}>
      <Logo />
      <Nav />
      <div>
        <div className="filter-section">
          <GenderFilter />
          <CategoryFilter />
          <PriceSort />
          <SearchBar/>
          <div style={{display:"flex", gap:"20px"}}>
            <RatingSlider />
            <ClearButton />
          </div>
        </div>
        <div className="product-list">
          <ProductList />
        </div>
      </div>
    </div>
  );
};
export default Products;