import { useContext } from 'react'

import classes from '../Cart/Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

  // cartCtx에 아무것도 담겨있지않다면 값이 0으로 보이게
  const hasItems = cartCtx.items.length > 0

  const cartItemsRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }

  const cartItemsAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemsRemoveHandler.bind(null, item.id)}
          onAdd={cartItemsAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
