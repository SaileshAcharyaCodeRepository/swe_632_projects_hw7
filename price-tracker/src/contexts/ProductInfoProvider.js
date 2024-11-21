// Gemini AI assisted code

import React, { createContext, useState, useContext } from "react";

const ProductInfoContext = createContext();

const ProductInfoProvider = ({ children }) => {
  const [products, setProducts] = useState([
    // {
    //   id: "",
    //   name: "",
    //   number: "",
    //   websites: [],
    //   prices: [],
    // },
  ]);

  const handleAddProduct = (
    newProductName,
    newProductNumber,
    newProductWebsite
  ) => {
    console.log(
      "handelAddProduct",
      newProductName,
      newProductNumber,
      newProductWebsite
    );
    // debugger;
    const newProduct = {
      id: Date.now(), // Simple unique ID generation
      name: newProductName,
      number: newProductNumber,
      websites: [newProductWebsite],
      prices: [],
    };
    setProducts([...products, newProduct]);
    console.log("After handleAddProduct", products);
  };

  const handleRemoveProduct = (id) => {
    //console.log("handelRemoveProduct", id);
    setProducts(products.filter((item) => item.id !== id));
    //console.log("After handleRemoveProduct", products);
  };

  const handleUpdateProductName = (id, newName) => {
    //console.log("handleUpdateProductName", id);
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
    //console.log("After handleUpdateProductName", products);
  };

  const handleUpdateProductNumber = (id, newProductNumber) => {
    //console.log("handleUpdateProductNumber", id);
    setProducts(
      products.map((item) =>
        item.id === id ? { ...item, number: newProductNumber } : item
      )
    );
    //console.log("After handleUpdateProductNumber", products);
  };

  const handleAddProductTrackedWebsites = (
    id,
    newProductTrackedWebsitesToAdd
  ) => {
    /*
    console.log(
      "ProductInfoProvider: Before: ",
      "products websites :",
      products.websites,
      id,
      newProductTrackedWebsitesToAdd
    );
    */
    setProducts(
      products.map((item) =>
        item.id === id
          ? {
              ...item,
              websites: [
                ...new Set([
                  ...item.websites,
                  ...newProductTrackedWebsitesToAdd,
                ]),
              ],
            }
          : item
      )
    ); /*
    console.log(
      "ProductInfoProvider: After: ",
      products.websites,
      id,
      newProductTrackedWebsitesToAdd
    );
    */
  };

  const handleRemoveProductTrackedWebsites = (
    id,
    productTrackedWebsitesToRemove
  ) => {
    setProducts(
      products.map((item) =>
        item.id === id
          ? {
              ...item,
              websites: productTrackedWebsitesToRemove,
            }
          : item
      )
    );
  };

  return (
    <ProductInfoContext.Provider
      value={{
        products,
        handleAddProduct,
        handleRemoveProduct,
        handleUpdateProductName,
        handleUpdateProductNumber,
        handleAddProductTrackedWebsites,
        handleRemoveProductTrackedWebsites,
      }}
    >
      {children}
    </ProductInfoContext.Provider>
  );
};

const useProductInfoContext = () => {
  return useContext(ProductInfoContext);
};

export { ProductInfoProvider, useProductInfoContext };
