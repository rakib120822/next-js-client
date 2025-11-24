import FeatureCard from "@/component/card/FeatureCard";
import React from "react";

const products = [
  {
    id: 1,
    title: "Classic Burger",
    description: "Juicy grilled beef patty with cheese and fresh veggies.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 2,
    title: "Pepperoni Pizza",
    description: "Hot cheesy pizza topped with premium pepperoni slices.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1601924928789-6f3ce3580b8b",
  },
  {
    id: 3,
    title: "Fried Chicken",
    description: "Crispy golden fried chicken with special seasoning.",
    price: 10.49,
    image: "https://images.unsplash.com/photo-1606755962773-d324a380d5c9",
  },
  {
    id: 4,
    title: "French Fries",
    description: "Crispy, salted french fries served hot.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5",
  },
  {
    id: 5,
    title: "Cold Coffee",
    description: "Iced coffee with creamy texture and rich flavor.",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
  },
];

function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-2">
        <span className="text-red-600">ALL</span> Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <FeatureCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
