import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users!: User[];
  currentPage: number = 1;
  pageLimit: number = 10;
  hasMoreData:boolean = true
  constructor(private router:Router, private crud:CrudService){

  }

  ngOnInit(): void {
    this.loadUsers()

  }

  loadUsers(){
     this.crud.fetchPaginationData(this.currentPage, this.pageLimit).subscribe({
      next:(data) =>{
        this.users = data;
        this.hasMoreData = data.length === this.pageLimit;
      } 
     })
  }

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.loadUsers()
    }
  }
  nextPage(){
      this.currentPage++;
      this.loadUsers()
  }

  navigateToAddUser(){
    this.router.navigate(['crud/add']);
  }

  editUser(userId?:number){
    this.router.navigate(['/crud/edit', userId])
  }

  deleteUser(userId: number | undefined): void {
    if (userId !== undefined) {
      if (confirm('Are you sure you want to delete this user?')) {  // Confirmation before delete
        this.crud.deleteUser(userId).subscribe({
          next: () => {
            console.log('User deleted successfully.');
            this.loadUsers();  // Reload users after deletion
          },
          error: (error) => {
            console.error('Failed to delete user', error);
            // You can show a failure message or toast here
          }
        });
      }
    } else {
      console.error('Invalid user ID. Cannot delete user.');
    }
  }
  

}
