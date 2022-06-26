import { Express} from 'express'
import {userRouter} from './user.routes'
import { dvdRouter } from './dvd.routes'
import { cartRouter } from './cart.routes'

const registerRouters = (app: Express): void =>{
    app.use("/users", userRouter)
    app.use("/dvds", dvdRouter)
    app.use("/carts", cartRouter)
}
export default registerRouters