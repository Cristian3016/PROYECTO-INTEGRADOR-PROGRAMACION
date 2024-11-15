import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  calle: string = '';

  @Column()
  numero: string = '';

  @Column()
  ciudad: string = '';

  @Column({ nullable: true })
  referencia?: string;

  @Column()
  formaPago: string = '';

  @Column({ nullable: true })
  montoEfectivo?: number;

  @Column({ nullable: true })
  tarjetaNumero?: string;

  @Column({ nullable: true })
  tarjetaTitular?: string;

  @Column({ nullable: true })
  tarjetaVencimiento?: string;

  @Column({ nullable: true })
  tarjetaCVC?: string;

  @Column()
  fechaEntrega: string = '';

  @Column()
  horaEntrega: string = '';
}
