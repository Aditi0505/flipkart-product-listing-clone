const Search = () => {
  return (
    <>
      <span className="grow">
        <input
          type="text"
          placeholder="Search for products"
          className="font-Montserrat p-2 w-full relative"
        />
      </span>
      <i className="fas fa-search absolute top-6 left-2/4 ml-10 cursor-pointer"></i>
    </>
  );
};
export { Search };
