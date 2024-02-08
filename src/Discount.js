import React from "react";
import recipes from "./recipes";
import Swal from "sweetalert2";


const Discount = () => {
    const handleOrder = (id) => {
        console.log(id);

        const swalButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        
        swalButtons.fire({
            title: "You are about to make an order.",
            text: "",
            icon: "warning",
            showCancelButton: false,
            confirmButtonText: "Yes, make the order!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalButtons.fire({
                title: "Ordered",
                text: "Your order has been confirmed.",
                icon: "success"
              });
            }
          });
    }
    return ( 
        <div>
            <div className="discount-container">
                <div className="discount-header">
                    <h2 className="filled-container">30% discount on the items below during the weekend</h2>
                </div>
                <div className="cards">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="discount-items">
                            <img src={recipe.image} alt=""/>
                            <div className="discount-content">
                                <div> 
                                    <h5>{recipe.title}</h5>
                                    <p>${recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
 
export default Discount;