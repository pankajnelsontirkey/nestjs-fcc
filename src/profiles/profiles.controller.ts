import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import type { UUID } from 'crypto';

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
  findById(@Param('id', ParseUUIDPipe) id: UUID) {
    try {
      return this.profilesService.findById(id);
    } catch (error) {
      /* handle specific error thrown from the service layer
        if(error instanceof DatabaseException){
          throw NotFoundException()
        }
      */
      throw new NotFoundException(error.message);
    }
  }

  // POST /profiles
  @Post()
  create(@Body() createProfileDto: CreateProfileDto): CreateProfileDto {
    return this.profilesService.create(createProfileDto);
  }

  // PUT /profiles/:id
  @Put(':id')
  update(
    @Param('id', ParseUUIDPipe) id: UUID,
    @Body() updateProfileDto: UpdateProfileDto,
  ): UpdateProfileDto | { id: string } | {} {
    return this.profilesService.update(id, updateProfileDto);
  }

  // DELETE /profiles/:id
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: UUID) {
    return this.profilesService.remove(id);
  }
}
