import { Injectable } from '@angular/core';
import { Group } from '../models/group';
import { PlaceholderGroups } from '../mock-data/placeholder-groups';

@Injectable({
  providedIn: 'root',
})
export class GroupService {

  private mock_groups: Group[] = PlaceholderGroups;

  constructor() {}

  incrementarMembros(idGrupo: string): void {
    const grupo = this.mock_groups.find(g => g.id === idGrupo);
    if (grupo) {
      grupo.userPertence = true;
      grupo.membros++;
    }
  }

  decrementarMembros(idGrupo: string): void {
    const grupo = this.mock_groups.find(g => g.id === idGrupo);
    if (grupo) {
      grupo.userPertence = false;
      grupo.membros--;
    }
  }

  getGroups(): Group[] {
    return this.mock_groups;
  }

  getGroupById(id: string): Group | undefined {
    return this.mock_groups.find(group => group.id === id);
  }
}