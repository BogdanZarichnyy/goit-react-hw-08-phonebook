import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer,} from "redux-persist";

import authorizationReducer from './authorization/sliceAuth';
import { reducerContacts } from './contacts/sliceContacts';
import { reducerFilter } from './contacts/sliceFilter';

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const authorizationPersistConfig = {
    key: 'phonebook',
    storage,
    whitelist: ['userToken'],
}

export const rootReducer = combineReducers({
    authorization: persistReducer(authorizationPersistConfig, authorizationReducer),
    filter: reducerFilter,
    contacts: reducerContacts,
});