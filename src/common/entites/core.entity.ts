import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// 기본적으로 공유되는 모든 것을 적용 app 에서 공유하는 모든 것들
// 만든 모든 entities 를 사용할 수 있다
export class CoreEntity {
  @PrimaryGeneratedColumn() // default 값
  @Field(() => Number)
  id: number;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updateAt: Date;
}

// createDateColumn은 entity를 만들었을때 자동으로 설쟁해준다
