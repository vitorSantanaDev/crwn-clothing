import { ICategory } from 'interfaces'
import { createAction, Action, ActionWithPayload, withMatcher } from 'utils'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export type FetchCategoriesStartType =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccessType = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  ICategory[]
>

export type FetchCategoriesFailedType = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStartType =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
)

export const fetchCategoriesSuccess = withMatcher(
  (categoriesArray: ICategory[]): FetchCategoriesSuccessType =>
    createAction(
      CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      categoriesArray
    )
)

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailedType =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
)
