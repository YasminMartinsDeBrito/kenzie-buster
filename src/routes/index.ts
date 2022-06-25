import { Express} from 'express'
import {userRouter} from './user.routes'
import { dvdRouter } from './dvd.routes'
import { cartRouter } from './cart.routes'

const registerRouters = (app: Express): void =>{
    app.use("/api/users", userRouter)
    app.use("/api/dvds", dvdRouter)
    app.use("/api/cart", cartRouter)
}
export default registerRouters