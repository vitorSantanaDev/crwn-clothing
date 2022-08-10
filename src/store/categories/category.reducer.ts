import { CATEGORIES_ACTION_TYPES } from './category.types'

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null
}

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action: any
) => {
  const { type, payload } = action

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START: {
      return { ...state, isLoading: true }
    }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS: {
      return { isLoading: false, error: null, categories: payload }
    }
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED: {
      return { ...state, error: payload, isLoading: false }
    }
    default: {
      return { ...state }
    }
  }
}
