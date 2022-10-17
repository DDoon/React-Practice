import { configureStore } from '@reduxjs/tooklt'

import uiSlice from './ui-slice'
import cartSlice from './cart-slice'

const store = configureStore({
  reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer },
})

export default store
