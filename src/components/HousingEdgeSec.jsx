import React, { useEffect, useState } from "react";
import { cards } from "../assets/constants/card.jsx";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function HousingEdgeSec() {
    const [rightClick, setRightClick] = useState(0);

  const handleRightButton = () => {
    setRightClick((prevRightClick) => prevRightClick + 1);
  };

  const handleLeftButton = () => {
    setRightClick((prevRightClick) => Math.max(prevRightClick - 1, 0));
  };

    const getclassNames = () => {
      let str =  'flex gap-3 pt-2 transform transition-transform ease-in-out ' ;

      if(rightClick>0 && rightClick<6 ){
        let addedStr;
        if (rightClick==1) {
          addedStr='translate-x-[-160px]'
          
        }else if(rightClick == 2){
          addedStr='translate-x-[-320px]'

        }else if(rightClick == 3){
          addedStr='translate-x-[-480px]'

        }
        else if(rightClick == 4){
          addedStr='translate-x-[-640px]'

        }else{
          addedStr='translate-x-[-800px]'

        }
        str += addedStr
        
        }
        
        return str
      
    };


  

 

  
   

    
  

  const Card = ({ name, url }) => {
    return (
      <div className="w-40 md:w-36 border h-36 pl-3 pt-3 rounded-lg hover:shadow-2xl bg-white ">
        <div className="h-16 w-16">
          <img src={url} alt="" />
        </div>
        <div className="mt-2 font-bold">
          <span>{name}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="md:w-5/6  m-auto md:px-6 px-2 mt-24 items-center md:bg-slate-100 mb-20 pb-14 pt-8">
    <div className="flex">
        <h1 className=" text-2xl md:text-4xl mr-4">Housing edge</h1>
        <button className="text-lg border font-semibold leading-6 text-indigo-700 border-indigo-700 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-lg">
          Explore more
        </button>
      </div>

      <div className="mt-6  w-full flex items-center overflow-hidden relative">
        {rightClick > 0 && (
          <button onClick={handleLeftButton} className=" absolute left-0 bg-white rounded-full z-10 p-2 shadow-lg">
            <IoIosArrowRoundBack  size={40} fontSize={1}/>
          </button>
        )}
        <div className={getclassNames()}>
          {cards.map((card, index) => (
            <Card key={index} name={card.name} url={card.url} />
          ))}
        </div>
        {rightClick < 5 && (
          <button onClick={handleRightButton} className="absolute right-0 bg-white rounded-full z-10 p-2 shadow-lg">
            <IoIosArrowRoundForward size={40} />
          </button>
        )}
      </div>
    </div>
  );
}

export default HousingEdgeSec;
