import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Dvd } from "./dvd.entity";

@Entity("stock")
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ type: "integer" })
  quantity: number;

  @Column({ type: "numeric" })
  price: number;

  @OneToOne(() => Dvd, (dvd) => dvd.stock)
  dvd?: Dvd;
}