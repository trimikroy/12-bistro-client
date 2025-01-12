import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, price, recipe, image, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [,  refetch] = useCart();

  const handleFoodCart = ()=> {
    if (user && user.email) {
      // send cart item to database 
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image
      }
      axiosSecure.post('/carts', cartItem)
      .then(res=> {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          //  refetch cart to update the cart items count
           refetch();
        }
      })

    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "please login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
        }
      });
    }
  }
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
          <button onClick={() => handleFoodCart(item)} className="btn btn-outline bg-slate-100  border-0 border-b-4 border-b-orange-600 text-orange-400">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
