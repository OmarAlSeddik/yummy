const Search = () => {
  const inputStyle =
    "w-[15rem] bg-yummy-black rounded border-white border-[1px] py-1.5 px-3";

  return (
    <div className="ml-16 flex w-full flex-col items-center pt-6">
      <div className="flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by name"
        />
        <input
          type="text"
          className={inputStyle}
          placeholder="Search by first letter"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Search;
