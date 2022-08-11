import { createAction } from 'utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray: any) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categoriesArray
  )

export const fetchCategoriesFailed = (error: any) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
