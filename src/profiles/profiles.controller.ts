import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profiles')
export class ProfilesController {
  // GET /profiles
  @Get()
  fetchAll(@Query('location') location: string) {
    return [{ location }];
  }

  // GET /profiles/:id
  @Get(':id')
  fetchOne(@Param('id') id: string) {
    return { id };
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto): CreateProfileDto {
    return {
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
  }

  // PUT /profiles/:id
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): UpdateProfileDto | { id: string } {
    return {
      id,
      name: updateProfileDto.name,
      description: updateProfileDto.description,
    };
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
