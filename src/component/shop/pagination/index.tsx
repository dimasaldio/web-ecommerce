import React from "react";

interface IPaginationShop {
  currentPage: number;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
}

const PaginationShop: React.FC<IPaginationShop> = (props) => {
  return (
    <div className={`flex justify-center my-8 text-black`}>
      <button
        onClick={() => props.handlePageChange(props.currentPage - 1)}
        disabled={props.currentPage === 1}
        className="mx-[6px] md:w-[100px] md:h-[40px] w-[50px] h-[20px] text-[0.6rem] md:text-[1rem] rounded bg-[#F9F1E7]"
      >
        Previous
      </button>
      {Array.from({ length: props.totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => props.handlePageChange(index + 1)}
          disabled={props.currentPage === index + 1}
          className={`mx-[6px] w-[20px] h-[20px]  md:w-[50px] md:h-[50px] text-[0.6rem] md:text-[1rem] rounded ${
            props.currentPage === index + 1 ? "bg-[#B88E2F]" : "bg-[#F9F1E7]"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => props.handlePageChange(props.currentPage + 1)}
        disabled={props.currentPage === props.totalPages}
        className="mx-[6px] md:w-[100px] md:h-[40px] w-[50px] h-[20px] text-[0.6rem] md:text-[1rem] rounded bg-[#F9F1E7]"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationShop;
