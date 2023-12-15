type Props = {
    storeName: string;
    storeLocation: string;
    storeStock: number;
    comment: string;
    image: string;
  };
  
  const stockTranslate = ( storeStock: number ) => {
    switch (storeStock) {
      case 0:
        return 'nothing';
      case 1:
        return 'few';
      case 2:
        return 'full'
      default:
        return 
    }
  };

  const Store = ({ storeName, storeLocation, storeStock, comment, image}: Props) => (
    <div className="text-lime-500 place-content-center pl-2 py-2">
      <p>{storeName}</p>
      <p>{storeLocation}</p>
      <p>在庫: {stockTranslate(storeStock)}</p>
      <p>{comment}</p>
      <p>{image}</p>
    </div>
  );
  
  export default Store;
  