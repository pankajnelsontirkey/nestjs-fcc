import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { CreateProfileDto } from './dto/create-profile.dto';

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
}
