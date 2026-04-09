import { BlockList } from "net";
import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity('produtos')
export class Produto extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 130 })
    nome!: string;

    @Column({ type: 'text', nullable: true })
    descricao?: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco!: number;

    @Column({ type: 'boolean', default: false })
    ativo!: boolean;

    @Column({ name: 'criado_em' })
    criadoEm!: Date;

    @Column({ name: 'atualizado_em', nullable: true })
    atualizadoEm!: Date;

}