import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '@/features/modal/modalSlice'


const store = configureStore({
  reducer: {
    modal: modalReducer
  },
})

export default store

// BlogAnalyzr is designed to analyze the quality

// of blog posts of technical writers using CM for necessary offchain analysis. 
// The more point an author's work gets, 
// the higher he gets in ranks.
