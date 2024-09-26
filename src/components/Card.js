import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = function (props) {
  const review = props.reviews;

  return (
    <div
      className="flex flex-col items-center
        "
    >
      {/* image */}
      <div className="absolute left-4 top-[-40px]">
        <img className="w-20 h-20 rounded-full" src={review.image} alt="img" />
      </div>

      {/* header */}
      <h1 className="text-xl font-bold">{review.name}</h1>
      <p className="text-sm text-gray-800 uppercase">{review.job}</p>

      {/* body */}
      <div className="flex flex-col items-center justify-center py-10">
        <div className="mb-4">
          <FaQuoteLeft />
        </div>
        <div className="text-center">{review.text}</div>
        <div className="mt-4">
          <FaQuoteRight />
        </div>
      </div>
    </div>
  );
};

export default Card;
