
import React from 'react';

const SearchBar = ({keyword,setKeyword,onClick}) => {
   const onSearchClick = () => {
      onClick(keyword)
  }
  return (
    <div className = "flex items-center justify-center w-auto ">
        <form className="w-auto">
            <input 
                className="flex flex-grow w-auto focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none  text-sm text-black placeholder-gray-500 border border-gray-200 rounded-lg py-2 pl-10" 
                type="text" 
                aria-label="Filter projects" 
                placeholder="Search Products" 
                onChange={setKeyword}
                value = {keyword}
                onKeyPress = {onSearchClick}
                />
        </form>
    </div>
  );
}

export default SearchBar