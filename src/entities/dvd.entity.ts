import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
  } from "typeorm";
  import { Cart } from "./cart.entity";
  import { Stock } from "./stock.entity";
  
  @Entity("dvd")
  export class Dvd {
    @PrimaryGeneratedColumn("uuid")
    id?: string;
  
    @Column()
    name: string;
  
    @Column()
    duration: string;
  
    @OneToMany(() => Cart, (cart) => cart.dvd)
    cart?: Cart[];
  
    @OneToOne(() => Stock, (stock) => stock, { eager: true })
    @JoinColumn()
    stock: Stock;
  }