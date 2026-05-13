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

    @Column({ type: 'int', default: 0 })
    quantidade!: number;

    @Column({ type: 'boolean', default: false })
    ativo!: boolean;

    @Column({ name: 'criado_em', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    criadoEm!: Date;

    @Column({ name: 'atualizado_em', type: 'timestamp', nullable: true })
    atualizadoEm?: Date;

}