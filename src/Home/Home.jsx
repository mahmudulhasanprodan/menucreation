import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Flex from "../Flex/Flex"

const Home = () => {

// Catagory function start here------------

const [Showcatagory, setShowcatagory] = useState(false);

const Handlecatagory = () =>{
  setShowcatagory(!Showcatagory);
};

// Account function start here ------------

const [Showaccount, setShowaccount] = useState(false);
const Handleaccount = () =>{
  setShowaccount(!Showaccount);
};


  return (
    <>
      <div className="py-10">
        <div className="container">
          <Flex className={"justify-between items-center cursor-pointer"}>
            <div>
              <FaBars onClick={Handlecatagory} />
            </div>
            {Showcatagory && (
              <div className="absolute top-16 h-96 bg-red-400">
                <ul>
                  <li className="py-2 px-14 bg-red-400 hover:bg-gray-500 hover:text-white">
                    Home
                  </li>
                  <li className="py-2 px-14 bg-red-400 hover:bg-gray-500 hover:text-white">
                    Services
                  </li>
                  <li className="py-2 px-14 bg-red-400 hover:bg-gray-500 hover:text-white">
                    About
                  </li>
                  <li className="py-2 px-14 bg-red-400 hover:bg-gray-500 hover:text-white">
                    Contact Us
                  </li>
                </ul>
              </div>
            )}

            <Flex className={"items-center gap-x-3"}>
              <Flex className={"items-center gap-x-1"}>
                <div>
                  <FaUser onClick={Handleaccount} />
                </div>
                <div>
                  <FaAngleDown onClick={Handleaccount} />
                </div>
              </Flex>
              {Showaccount && (
                <div className="absolute top-16 right-32">
                  <ul>
                    <li className="py-2 px-12 bg-black text-white font-bold hover:bg-gray-700">
                      My Account
                    </li>
                    <li className="py-2 px-12 bg-black text-white font-bold hover:bg-gray-700">
                      Logout
                    </li>
                  </ul>
                </div>
              )}

              <div>
                <FaShoppingCart />
              </div>
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
}

export default Home
