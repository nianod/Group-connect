import { createSlice } from "@reduxjs/toolkit"

const initialSlide = {
  theme: "dark"
}

const themeSlice = createSlice({
  name: 'theme'
  initialSlide,
  reducers {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    }
  }
})

const {toggleTheme} = themeSlice.actions

export default ThemeSlice