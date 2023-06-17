import React, { useState } from "react";
import product1Image from "../assets/images/producto2.png";
import product2Image from "../assets/images/producto3.png";
import product3Image from "../assets/images/producto4.png";
import product4Image from "../assets/images/producto5.png";
import product5Image from "../assets/images/producto4.png";

import category1image from "../assets/images/frutas.png";
import category2image from "../assets/images/frutosecos.png";
import category3image from "../assets/images/frutosrojos.png";
import category4image from "../assets/images/hortalizas.png";
import category5image from "../assets/images/verduras.png";


function Home() {
  const products = [
    {
      id: 1,
      title: "Banano",
      price: 10.99,
      image: product1Image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tellus nec nulla condimentum, at eleifend felis pellentesque.",
    },
    {
      id: 2,
      title: "Piña",
      price: 19.99,
      image: product2Image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tellus nec nulla condimentum, at eleifend felis pellentesque.",
    },
    {
      id: 3,
      title: "Manzana verde",
      price: 15.99,
      image: product3Image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tellus nec nulla condimentum, at eleifend felis pellentesque.",
    },
    {
      id: 4,
      title: "Mango",
      price: 12.99,
      image: product4Image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tellus nec nulla condimentum, at eleifend felis pellentesque.",
    },
    {
      id: 5,
      title: "Product 5",
      price: 8.99,
      image: product5Image,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod tellus nec nulla condimentum, at eleifend felis pellentesque.",
    },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const categories = [
    {
      id: 1,
      name: "Frutas",
      image: category1image,
    },
    {
      id: 2,
      name: "Frutos secos",
      image: category2image,
    },
    {
      id: 3,
      name: "Frutos rojos",
      image: category3image,
    },
    {
      id: 4,
      name: "Verduras",
      image: category4image,
    },
    {
      id: 5,
      name: "Hortalizas",
      image: category5image,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(1);

  const selectCategory = (category) => {
    setSelectedCategory(category.id);
    // Aquí puedes agregar la lógica para filtrar los productos según la categoría seleccionada
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentItems.map((product) => (
          <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <button
              className="bg-green-400 hover:bg-green-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-2 px-4 py-2 rounded-md ${
              index + 1 === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-white p-4 shadow-md rounded-md cursor-pointer ${
                selectedCategory === category.id ? "border-4 border-blue-500" : ""
              }`}
              onClick={() => selectCategory(category)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
