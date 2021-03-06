import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { updateRestaurantDto } from './dtos/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

// 실제로 DB에 접근하는 방식
@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private readonly restaurants: Repository<Restaurant>,
  ) {}
  getAll(): Promise<Restaurant[]> {
    return this.restaurants.find(); // find()는 async method여서 Promise를 써줘야 한다
  }

  createRestaurant(createRestaurant: CreateRestaurantDto): Promise<Restaurant> {
    const newRestaurant = this.restaurants.create(createRestaurant);
    return this.restaurants.save(newRestaurant);
  }

  updateRestaurant({ id, data }: updateRestaurantDto) {
    return this.restaurants.update(id, { ...data }); // 업데이트는 업데이트할 아이디 값가 업데이트 할 내용들을 data로 받아온다
  }
}
