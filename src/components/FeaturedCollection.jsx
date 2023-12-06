import React, { useState } from "react";
import { category } from "../assets/constants/places.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function FeaturedCollection() {
  const [rightClick, setRightClick] = useState(1);

  const handleLeftButton = () => {
    setRightClick((prevRightClick) => Math.max(prevRightClick - 1, 0));
  };

  const handleRightButton = () => {
    setRightClick(( prevRightClick ) => prevRightClick + 1);
  };


  const getclassNames = () => {
      let str =  'flex gap-1 min-w-max  pt-2 transform transition-transform  ease-in-out flex-row ' ;

      if(rightClick>0 && rightClick<6 ){
        let addedStr;
        if (rightClick==1) {
          addedStr='translate-x-[-20%]'
          
        }else if(rightClick == 2){
          addedStr='translate-x-[-40%]'

        }else if(rightClick == 3){
          addedStr='translate-x-[-60%]'

        }
       
        str += addedStr
        
        }
        
        return str
      
    };

  const Card = ({ category }) => (
    <div className="w-[30%] h-60  object-fill border rounded-lg hover:shadow-2xl relative mt-8">
      <img className="h-52" src={category.imageUrl} alt="" />
      <div className="absolute  bottom-12 z-20 right-1/2 text-white translate-x-[-50%,-50%]">
        <p className="text-2xl font-bold">{category.name}</p>
        <p>{category.desc}</p>
      </div>
    </div>
  );
  return (
    <div className=" w-full md:w-5/6 mx-auto mt-[15vh] p-6 items-center">
      <div className="w-full">
        <h1 className="text-4xl mr-4 ">Featured collection</h1>
        <p className="text-gray-400 text-lg">
          customized property collection for you
        </p>
      </div>
      <div className="flex items-center mt-6 overflow-hidden flex-wrap h-52 justify-between relative">
        {rightClick > 0 && (
          <button
            onClick={handleLeftButton}
            className=" absolute left-0 bg-white rounded-full z-10 p-2 shadow-lg"
          >
            <IoIosArrowRoundBack size={40} fontSize={1} />
          </button>
        )}
        <div className={getclassNames()}>
          {category.map((category, index) => (
            <Card key={index} category={category} />
          ))}
        </div>
        {rightClick < 2 && (
          <button
            onClick={handleRightButton}
            className="absolute right-0 bg-white rounded-full z-10 p-2 shadow-lg"
          >
            <IoIosArrowRoundForward size={40} />
          </button>
        )}
      </div>
    </div>
  );
}

export default FeaturedCollection;
