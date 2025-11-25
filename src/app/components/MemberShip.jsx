import React from "react";
import { MdCardMembership } from "react-icons/md";
import { FaBusinessTime, FaShoppingCart } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";


function MemberShip(props) {
  return (
    <div className="shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <h3 className="text-xl text-center text-info font-semibold mb-5">Claim Our Membership</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="flex flex-col justify-center items-center bg-primary-content py-5 px-2 text-center rounded-2xl shadow-sm hover:text-info hover:scale-110 hover:shadow-xl transition-all">
                <FaShoppingCart size={33} />
                <p className="text-lg">Shopping Online to Life Easy</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-primary-content py-5 px-2 text-center rounded-2xl shadow-sm hover:text-info hover:scale-110 hover:shadow-xl transition-all">
                <FaRegCreditCard size={33}/>
                <p className="text-lg">You Cane Online Payment</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-primary-content py-5 px-2 text-center rounded-2xl shadow-sm hover:text-info hover:scale-110 hover:shadow-xl transition-all">
                <MdCardMembership size={33} />
                <p className="text-lg">Get MemberShip to save Money</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-primary-content py-5 px-2 text-center rounded-2xl shadow-sm hover:text-info hover:scale-110 hover:shadow-xl transition-all">
                <FaBusinessTime size={33} />
                <p className="text-lg">Grow Your Business With Us</p>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default MemberShip;
