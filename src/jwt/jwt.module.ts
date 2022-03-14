import { DynamicModule, Global, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './jwt.constants';
import { JwtModuleOptions } from './jwt.interfaces';
import { JwtService } from './jwt.service';

@Module({})
@Global()
export class JwtModule {
  // DynamicModule는 단지 또 다른 모듈을 반환해주는 모듈이다
  static forRoot(options: JwtModuleOptions): DynamicModule {
    return {
      module: JwtModule,
      exports: [JwtService],
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        JwtService,
      ],
    };
  }
}

// prividers : [
//     {
//         provide: "BANANAS",
//         useValue: options,
//     },
//     JwtService
// ]

// sercive부분에서
// constructor(@Inject("BANANAS") private readonly options: JwtModuleOptions) 를 호출함
