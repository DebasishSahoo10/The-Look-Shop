import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import {FilterContext} from "../../contexts/FilterContext"
import { useNavigate } from "react-router-dom";
import './Categories.css'

export const Categories = () => {
  const { state } = useContext(DataContext);
  const {dispatchFilters} = useContext(FilterContext)
  const navigate = useNavigate()
  const handleCategoryNavigate = (gender) => {
    dispatchFilters({type : "SET_GENDER", payload : gender})
    navigate('/products')
  }
  return (
    <div className="categories">
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>MEN CHARACTERS</p>
          <a onClick={()=>handleCategoryNavigate("men")}>
            <p style={{textDecoration : "underline"}}>SHOW ALL</p>
          </a>
        </div>
        <div className="card-container">
          {state.products
            .filter((item) => item.gender === "men")
            .map((item, index) => {
              if (index < 4) {
                return (
                  <li key={item.id} className="product-card">
                    <img
                      src={item.img}
                      alt=""
                    />
                    <p>{item.name}</p>
                  </li>
                );
              }
            })}
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div style={{ display: "flex", gap: "20px" }}>
          <p>WOMEN CHARACTERS</p>
          <a onClick={()=>handleCategoryNavigate("women")}>
            <p style={{textDecoration : "underline"}}>SHOW ALL</p>
          </a>
        </div>
        <div className="card-container">
          {state.products
            .filter((item) => item.gender === "women")
            .map((item, index) => {
              if (index < 4) {
                return (
                  <li key={item.id} className="product-card">
                    <img
                      src={item.img}
                      alt=""
                      height={"200px"}
                      width={"150px"}
                    />
                    <p>{item.name}</p>
                  </li>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};
