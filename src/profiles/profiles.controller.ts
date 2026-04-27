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
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  // GET /profiles
  @Get()
  findAll(@Query('location') location: string) {
    return this.profilesService.findAll();
  }

  // GET /profiles/:id
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.profilesService.findById(id);
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto): CreateProfileDto {
    return this.profilesService.create(createProfileDto);
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
