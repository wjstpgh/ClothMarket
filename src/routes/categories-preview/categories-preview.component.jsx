import { useSelector } from "react-redux";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import Spinner from "../../component/spinner/spinner.component";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.select";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
}

export default CategoriesPreview;