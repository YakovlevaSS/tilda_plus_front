import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IInitialState {
  user: string | null;
}

interface IPayload {
  access: string | null;
}

const AUTH_INFO = 'auth';

function getAuthFromLocalStorage(): IInitialState | null {
  try {
    return JSON.parse(localStorage.getItem(AUTH_INFO) || '');
  } catch (error) {
    console.error(error);
    return null;
  }
}

const initialState: IInitialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState: getAuthFromLocalStorage() ?? initialState,

  reducers: {
    setAuth: (state, action: PayloadAction<IPayload>) => {
      const { access } = action.payload ?? initialState;
      state.user = access;

      localStorage.setItem(AUTH_INFO, JSON.stringify(state));
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
