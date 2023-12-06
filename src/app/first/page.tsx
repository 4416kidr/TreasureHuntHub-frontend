import Store from "@/components/store";

let storeData = {
  store1: {
    name: "Store 1",
    location: "Location 1",
    storeStock: 2,
    comment: "This is store 1",
    imagePath: "/path/to/store1/image",
  },
  store2: {
    name: "Store 2",
    location: "Location 2",
    storeStock: 0,
    comment: "This is store 2",
    imagePath: "/path/to/store2/image",
  },
  store3: {
    name: "Store 3",
    location: "Location 3",
    storeStock: 3,
    comment: "This is store 3",
    imagePath: "/path/to/store3/image",
  },
  store4: {
    name: "Store 4",
    location: "Location 4",
    storeStock: 1,
    comment: "This is store 4",
    imagePath: "/path/to/store4/image",
  },
  store5: {
    name: "Store 5",
    location: "Location 5",
    storeStock: 0,
    comment: "This is store 5",
    imagePath: "/path/to/store5/image",
  },
  store6: {
    name: "Store 6",
    location: "Location 6",
    storeStock: 4,
    comment: "This is store 6",
    imagePath: "/path/to/store6/image",
  },
  store7: {
    name: "Store 7",
    location: "Location 7",
    storeStock: 2,
    comment: "This is store 7",
    imagePath: "/path/to/store7/image",
  },
  store8: {
    name: "Store 8",
    location: "Location 8",
    storeStock: 0,
    comment: "This is store 8",
    imagePath: "/path/to/store8/image",
  },
  store9: {
    name: "Store 9",
    location: "Location 9",
    storeStock: 3,
    comment: "This is store 9",
    imagePath: "/path/to/store9/image",
  },
  store10: {
    name: "Store 10",
    location: "Location 10",
    storeStock: 1,
    comment: "This is store 10",
    imagePath: "/path/to/store10/image",
  },
};

export default function Home() {
  return (
    <main>
      <h1>first page</h1>
      <ul className="flex flex-wrap">
        {Object.values(storeData).map((store) => (
          <li key={store.name} className="w-60 m-2 border border-red-500">
            <Store
              storeName={store.name}
              storeLocation={store.location}
              storeStock={store.storeStock}
              comment={store.comment}
              image={store.imagePath}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
