//현재 사용하지 않는 상품데이터 상태 관리 코드, 리덕스로 대체

// import { createContext, useEffect, useState } from "react";
// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// export const CategoriesProvider = ({ children }) => {
//   const [categoriesMap, setCategoriesMap] = useState({});
//   const value = { categoriesMap };

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     }
//     getCategoriesMap();
//   }, []);

//   return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
// }