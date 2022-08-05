import { createAction } from 'utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export const setCategories = (categoriesArray: any) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
