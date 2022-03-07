// 데이터베이스에 있는 모델 느낌

import { Field, InputType, ObjectType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true }) // OmitType을 ObjectType으로 변환 할 수 있는 코드
@ObjectType() // 자동으로 스키마를 빌드하기 위해 사용하는GraphQL 데코레이션
@Entity() // Entity는 TypeORM이 DB에 저장
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  @IsNumber()
  id: number;

  @Field((is) => String)
  @Column()
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((type) => Boolean, { defaultValue: true }) // 그래프QL에서 이 필드의 default Value 가 true이다
  @Column({ default: true }) // db에서 이 필드의 default Value 가 true이다
  @IsBoolean()
  @IsOptional()
  isVegan: Boolean;

  @Field((type) => String)
  @Column()
  @IsString()
  address: String;

  @Field((type) => String)
  @Column()
  @IsString()
  ownerName: String;

  @Field((tpye) => String)
  @Column()
  @IsString()
  categoryName: string;
}
