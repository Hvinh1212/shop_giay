import OrderDetail from "../Pages/order_detail"
import Cart from "../Pages/cart"
import Home from "../Pages/Home"
import OrderManagement from "../Pages/order_management"
import Account from "../Pages/account"
import Payment from "../Pages/payment"
import OrderTracking from "../Pages/order_tracking"

const publicRoutes = [
    { path: '/', conponent: Home },
    { path: '/orderdetail', conponent: OrderDetail },
    { path: '/cart', conponent: Cart },
    { path: '/ordermanagement', conponent: OrderManagement },
    { path: '/account', conponent: Account },
    { path: '/payment', conponent: Payment },
    { path: '/ordertracking', conponent: OrderTracking },
]

export { publicRoutes };