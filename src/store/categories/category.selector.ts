import { createSelector } from 'reselect'
import { CategoiresStateType } from './category.reducer'

import { CategoryMapType } from 'interfaces'

const selectCategoryReducer = (state: any): CategoiresStateType =>
  state.categories

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories
  }
)

export const selectCategoriesArray = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc: any, category: any) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items

      return acc
    }, {} as CategoryMapType)
  }
)

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)

export default selectCategoriesArray
