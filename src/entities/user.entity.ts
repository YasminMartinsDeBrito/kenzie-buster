import  {compare } from 'bcrypt'
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Cart } from "./index"


@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id?:string

    @Column()
    name: string

    @Column({unique:true})
    email: string

    @Column()
    password?: string

    @Column({default: false})
    isAdm?: boolean

    @OneToMany(() => Cart, (cart) => cart.user)
    cart?: Cart[]


    comparePwd = async (comparePassword: string) => {
        return await compare(comparePassword, this.password)
    }
}