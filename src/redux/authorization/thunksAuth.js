import { createAsyncThunk } from '@reduxjs/toolkit';
import { rerquest, setToken } from 'services/axiosConfig';

export const getCurrentUserInfoThunk = createAsyncThunk('authentication/currentUser', async (_, thunkAPI) => {
    const userToken = thunkAPI.getState().authorization.userToken;

    try {
        if (!userToken) {
            return thunkAPI.rejectWithValue();
        }
        setToken.add(userToken);
        const { data } = await rerquest('/users/current');
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const registerThunk = createAsyncThunk('authentication/register', async (registerUserInfo, thunkAPI) => {
    try {
        
        const { data } = await rerquest.post('/users/signup', registerUserInfo);
        setToken.add(data.token);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});


export const logInThunk = createAsyncThunk('authentication/login', async (loginUserInfo, thunkAPI) => {
    try {
        const { data } = await rerquest.post('/users/login', loginUserInfo);
        setToken.add(data.token);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOutThunk = createAsyncThunk('authentication/logout', async (_, thunkAPI) => {
    try {
        const { data } = await rerquest.post('/users/logout');
        setToken.remove();
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});