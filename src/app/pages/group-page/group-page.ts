import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GroupService } from '../../services/group-service';
import { Group } from '../../models/group';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user';

@Component({
  selector: 'app-group-page',
  imports: [HeaderComponent, Footer, CommonModule, FormsModule, RouterLink],
  templateUrl: './group-page.html',
  styleUrl: './group-page.css',
})
export class GroupPage implements OnInit {
  pageGroup: Group | undefined = undefined;
  localUser: User | null = null;

  grupoId: string | null = null;
  grupoTags: string[] | null = null;
  grupoPosts: string[] | null = null;

  userIsInGroup: boolean = false;
  groupHasPosts: boolean = false;

  constructor(private auth:AuthService, private route: ActivatedRoute, private groupService:GroupService) {}

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.paramMap.get('id');
    this.localUser = this.auth.getUser();
    
    if(this.grupoId) {
      this.pageGroup = this.groupService.getGroupById(this.grupoId);
      
      if(this.pageGroup) {
        this.userIsInGroup = this.localUser?.groups?.includes(this.pageGroup.titulo) ?? false;
        this.grupoTags = this.pageGroup.tags;
      }
    }

    if(this.grupoPosts) {
      this.groupHasPosts = true;
    }
    console.log('ID do Grupo aberto:', this.grupoId);
  }
}
