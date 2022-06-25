import {Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn } from "typeorm";
import { Dvd } from "./index";


@Entity('stock')
export class Stock {
    @PrimaryGeneratedColumn('uuid')
    id?: string

    @Column({type: 'int'})
    quantity: number

    @Column({type:'float'})
    price:number

    @OneToOne(() => Dvd,(dvd) => dvd.stock)
    @JoinColumn()
    dvd: Dvd
}

