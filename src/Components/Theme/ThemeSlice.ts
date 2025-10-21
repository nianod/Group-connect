import { createSlice } from "@reduxjs/toolkit"

const initialSlide = {
  theme: "dark"
}

const ThemeSlice = createSlice({
  name: 'theme'
  initialSlide,
  reducers {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    }
  }
})

const {toggleTheme} = ThemeSlice.actions

export default ThemeSlice