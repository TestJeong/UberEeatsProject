// 데이터베이스에 있는 모델 느낌

import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field((is) => String)
  name: string;

  @Field((type) => Boolean, { nullable: true })
  isVegan?: Boolean;

  @Field((type) => String)
  address: String;

  @Field((type) => String)
  ownerName: String;
}
