const ProductCard = ({ productDetails }) => {
  const { name, brand, price, size, image } = productDetails;
  return (
    <>
      <div className="flex flex-col w-56 font-Quattrocento">
        <img src={`${image}`} alt={name} />
        <div>{name}</div>
        <div>{brand}</div>
        <div>{`Rs. ${price}`}</div>
        <div className="flex gap-4">
          Sizes:{" "}
          {size.map((all, index) => (
            <span key={index}>{all}</span>
          ))}
        </div>
      </div>
    </>
  );
};
export { ProductCard };
