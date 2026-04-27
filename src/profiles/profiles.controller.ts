import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  NotFoundException,
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
    return this.profilesService.findById(id); // Exception handled at service.
    // throw new HttpException('Profile Not Found', HttpStatus.NOT_FOUND);
    // throw new NotFoundException('Profile not found!');
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
  ): UpdateProfileDto | { id: string } | {} {
    return this.profilesService.update(id, updateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.profilesService.remove(id);
  }
}
