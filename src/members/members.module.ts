import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MongooseModule } from '@nestjs/mongoose';
import { memberSchema } from './schemas/members.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: "Members", schema: memberSchema}
    ])
  ],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
