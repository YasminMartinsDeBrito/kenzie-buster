import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Cart } from "./index";
import { Stock } from "./index";

@Entity('dvd')
export class Dvd {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column()
    name: string

    @Column()
    duration: string

    @OneToOne(() => Stock, (stock) => stock.dvd, {eager: true})
    @JoinColumn()
    stock: Stock

    @OneToMany(() => Cart, (cart) => cart.dvd)
    cart: Cart[]
}
