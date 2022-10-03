import { AnyAction } from 'redux'

import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess
} from './category.actions'
import { ICategory } from 'interfaces'

export type CategoiresStateType = {
  readonly categories: ICategory[]
  readonly isLoading: boolean
  readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE: CategoiresStateType = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoiresStateType => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true }
  }
  if (fetchCategoriesSuccess.match(action)) {
    return { isLoading: false, error: null, categories: action.payload }
  }
  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false }
  }
  return state
}
