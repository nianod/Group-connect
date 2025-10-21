import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
  theme: 'dark' | "light"
}
const initialState :ThemeState = {
  theme: "dark"
}

const themeslice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
})

export const {toggleTheme} = themeslice.actions

export default themeslice.reducer