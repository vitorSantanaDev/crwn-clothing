import { takeLatest, call, all, put } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from 'services/firebase'

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess
} from './category.actions'
import { CATEGORIES_ACTION_TYPES } from './category.types'

export function* fetchCategoriesAsync() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const categoriesArray = yield call(getCategoriesAndDocuments)
    yield put(fetchCategoriesSuccess(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  )
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)])
}
