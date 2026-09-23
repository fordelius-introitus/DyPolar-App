import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { PlaceholderGroups } from '../mock-data/placeholder-groups';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  private mock_groups: Group[] = PlaceholderGroups;

  constructor() {}

  getGroups(): Group[] {
    return this.mock_groups;
  }

  getGroupById(id: string): Group | undefined {
    return this.mock_groups.find(group => group.id === id);
  }
}