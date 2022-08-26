import { takeLatest, put, all, call } from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user.types'
import {
  signInSuccess,
  signInFailed,
  signUpSucess,
  signUpFailed,
  signOutSuccess,
  signOutFailed
} from './user.actions'

import {
  createUser,
  signOutUser,
  sigInAuthUser,
  getCurrentUser,
  sigInWithGooglePopup,
  createUserDocumentFromAuth
} from 'services/firebase'
import { TakeableChannel } from 'redux-saga'

export function* getSnapshotFromUserAuth(
  userAuth: any,
  additionalDetails?: any
) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    )
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const userAuth = yield call(getCurrentUser)
    if (!userAuth) return
    yield call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signInWithGoogle() {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { user } = yield call(sigInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signInWithEmail({ payload: { email, password } }: any) {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const { user } = yield call(sigInAuthUser, email, password)

    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

export function* signUp({ payload: { email, password, displayName } }: any) {
  try {
    const { user } = yield call(createUser, email, password)
    yield put(signUpSucess({ user, displayName }))
  } catch (error) {
    yield put(signUpFailed(error))
  }
}

export function* signOut() {
  try {
    yield call(signOutUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalDetails }
}: any) {
  yield getSnapshotFromUserAuth(user, additionalDetails)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START as unknown as TakeableChannel<unknown>,
    signInWithEmail
  )
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ])
}
