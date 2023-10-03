import './Categories.css'
import { CategorySection } from "./CategorySection";

export const Categories = () => {
  return (
    <div className="category">
      <CategorySection gender="men" />
      <CategorySection gender="women" />
    </div>
  );
};
