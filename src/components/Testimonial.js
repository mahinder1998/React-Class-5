import { useState } from "react";
import Card from "./Card";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Testimonial = function (props) {
  const reviews = props.reviews;

  const [index, setIndex] = useState(0);

 // leftShif
 function leftShiftHandler(){
    if(index - 1 < 0){
      setIndex(reviews.length - 1);
    }else{
      setIndex(index-1);
    }
 }
 // rightShif
 function rightShiftHandler(){
   if(index + 1 >= reviews.length){
      setIndex(0)
   }else{
    setIndex(index+1)
   }
 }
 // surprise
 function supriseHandler(){
    let randomNumber = Math.floor(Math.random()*reviews.length);
    setIndex(randomNumber);
 }


  return (
    <div
      className="flex flex-col items-center max-w-lg w-full bg-white relative
        rounded-sm
        py-10
        px-6"
    >
      <Card reviews={reviews[index]}></Card>

      <div className="relative">
        {/* footer arrow anf cta */}
        <div className="flex justify-center ">
          <div  onClick={leftShiftHandler} className="cursor-pointer">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div onClick={rightShiftHandler} className="cursor-pointer">
            <MdKeyboardArrowRight />
          </div>
        </div>

        {/* button */}
        <a
         onClick={supriseHandler}
          href="#"
          className="bg-slate-800 text-white py-2 px-2 inline-block border-sm mt-4 rounded-sm text-sm
                    hover:bg-slate-500
                    "
        >
          Surprise Me !
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
