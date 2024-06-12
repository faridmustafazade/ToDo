import React from "react";
import searchIcon from "../Assets/Images/search-outline.svg";
import sunIcon from "../Assets/Images/sunny-outline.svg";
import moonIcon from "../Assets/Images/moon-outline.svg";
const Search = ({ mode, setMode, setFilter, setSearchQuery }) => {
  console.log(mode);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="inputs flex md:flex-row flex-col md:justify-center gap-5 md:items-center font-quicksand-regular md:px-0 px-2">
      <div className="flex md:justify-normal justify-between border border-purpleColor duration-200 dark:bg-transparent rounded-md">
        <input
          onChange={handleSearchChange}
          placeholder="Search note..."
          className="ml-3 md:mr-5 md:w-96 w-full my-2 outline-none bg-transparent dark:text-white"
        />
        <img src={searchIcon} className="w-7 mr-2" alt="" />
      </div>
      <div className="flex justify-between md:w-auto w-full md:gap-5 items-center">
        <div className="md:w-auto w-[85%]">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="font-quicksand-semibold outline-none bg-purpleColor text-whiteColor text-sm rounded-md focus:border-none focus:border-blue-500 block w-full p-2.5"
          >
            <option className="md:text-base text-xs" value={"all"} selected>
              All
            </option>
            <option className="md:text-base text-xs" value={"complete"}>
              Complete
            </option>
            <option className="md:text-base text-xs" value={"incomplete"}>
              Incomplete
            </option>
          </select>
        </div>
        <div
          onClick={() => setMode(!mode)}
          className="bg-purpleColor rounded-md p-1 cursor-pointer"
        >
          {mode !== true ? (
            <img src={sunIcon} alt="" className="w-8" />
          ) : (
            <img src={moonIcon} alt="" className="w-8" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
