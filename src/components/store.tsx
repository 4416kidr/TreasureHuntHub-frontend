type Props = {
    storeName: string;
    storeLocation: string;
    storeStock: number;
    comment: string;
    image: string;
  };
  
  const Store = ({ storeName, storeLocation, storeStock, comment, image}: Props) => (
    <div className="text-lime-500 place-content-center pl-2 py-2">
      <p>{storeName}</p>
      <p>{storeLocation}</p>
      <p>在庫: {storeStock}</p>
      <p>{comment}</p>
      <p>{image}</p>
    </div>
  );
  
  export default Store;
  