// 데이터베이스에 있는 모델 느낌

import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() // 자동으로 스키마를 빌드하기 위해 사용하는GraphQL 데코레이션
@Entity() // Entity는 TypeORM이 DB에 저장
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Field((is) => String)
  @Column()
  name: string;

  @Field((type) => Boolean)
  @Column()
  isVegan: Boolean;

  @Field((type) => String)
  @Column()
  address: String;

  @Field((type) => String)
  @Column()
  ownerName: String;

  @Field((tpye) => String)
  @Column()
  categoryName: string;
}
