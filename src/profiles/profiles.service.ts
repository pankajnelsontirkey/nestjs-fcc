import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'Pankaj Nelson',
      description:
        'Looking for someone to pair program with. And duo in Valorant.',
    },
    {
      id: randomUUID(),
      name: 'Nelson Tirkey',
      description:
        'Just looking for someone to put the semi-colons at the end of my statements;',
    },
    {
      id: randomUUID(),
      name: 'Pankaj Tirkey',
      description: 'Just need someone to help with my deployments.',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findById(id: string) {
    return this.profiles.find((profile) => profile.id === id);
  }

  create(createProfileDto: CreateProfileDto) {
    const newProfile = {
      id: randomUUID(),
      ...createProfileDto,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profileFound = this.profiles.find((profile) => profile.id === id);

    if (!profileFound) {
      return {};
    }

    profileFound.name = updateProfileDto.name;
    profileFound.description = updateProfileDto.description;

    return profileFound;
  }

  remove(id: string) {
    const deleteAtIndex = this.profiles.findIndex(
      (profile) => profile.id === id,
    );

    this.profiles.splice(deleteAtIndex, 1);

    return;
  }
}
