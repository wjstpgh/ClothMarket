import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
)

export const fetchCategoriesSuccess = (categoriesArray) => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)
)

export const fetchCategoriesFailed = (error) => (
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
)

// thunk를 사용한 비동기 상태처리 saga로 대체
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoryArray = await getCategoriesAndDocuments('categories');
//     dispatch(fetchCategoriesSuccess(categoryArray));
//   }
//   catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// }