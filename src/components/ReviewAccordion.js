import { useState } from "react";

const ReviewAccordion = ({ review, showAccordion }) => {
  return (
    <div className=" px-4 py-2">
      <div className="w-full flex justify-between items-center cursor-pointer ">
        <p>ReviewHeader</p>
        <p>⬇️</p>
      </div>
      {showAccordion && (
        <div className="text-gray-700 flex flex-col gap-1">
          <p className="font-semibold">{review.reviewerName}</p>
          <p>{review.comment}</p>
          <p>{review.date}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewAccordion;
