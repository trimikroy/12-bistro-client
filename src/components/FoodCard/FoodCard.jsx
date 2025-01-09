import React from "react";

const FoodCard = ({ item }) => {
    const { name, price, recipe, image } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute right-0 mr-8 mt-8 px-2 py-1 rounded-sm bg-slate-950 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100  border-0 border-b-4 border-b-orange-600 text-orange-400">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
