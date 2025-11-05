import React, { useState } from "react";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleFindRecipes = () => {
    if (!ingredient) return alert("Please enter an ingredient!");
    // Mock recipe data (later replace with API)
    const sampleRecipes = [
      { name: "Leftover Veggie Stir Fry", ingredients: ["vegetables", "rice"] },
      { name: "Bread Upma", ingredients: ["bread", "onion"] },
      { name: "Fruit Smoothie", ingredients: ["banana", "milk"] },
    ];
    const results = sampleRecipes.filter(r => r.ingredients.includes(ingredient.toLowerCase()));
    setRecipes(results);
  };

  return (
    <div className="home-container">
      <h2>Hello, {user?.email}</h2>
      <p>Enter leftover ingredient to find recipes 👇</p>
      <input
        type="text"
        placeholder="e.g., rice, bread, tomato"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleFindRecipes}>Find Recipes</button>

      <div className="recipe-results">
        {recipes.length > 0 ? (
          recipes.map((r, i) => (
            <div key={i} className="recipe-card">
              <h3>{r.name}</h3>
              <p>Ingredients: {r.ingredients.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No recipes yet. Try searching!</p>
        )}
      </div>
    </div>
  );
}
