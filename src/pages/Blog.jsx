import React from "react";
import "../css/Blog.css";

function Blog() {
  const tips = [
    {
      title: "Save Leftover Rice 🍚",
      description:
        "Turn leftover rice into delicious rice fritters or fried rice with veggies for a quick meal.",
    },
    {
      title: "Overripe Bananas 🍌",
      description:
        "Make banana pancakes, banana bread, or smoothies instead of throwing them away.",
    },
    {
      title: "Stale Bread 🍞",
      description:
        "Transform stale bread into croutons, bread pizza, or bread pudding recipes.",
    },
    {
      title: "Veggie Scraps 🥕",
      description:
        "Save peels and stems for soups, stocks, or composting — nothing goes to waste!",
    },
  ];

  return (
    <div className="blog-container">
      <h1 className="blog-title">Cooking Tips & Zero-Waste Ideas 🌿</h1>

      <div className="blog-grid">
        {tips.map((tip, index) => (
          <div key={index} className="blog-card">
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
