import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent implements OnInit {

   addUserForm!: FormGroup;
   EditUser: boolean = false;
   userId!:number;

  constructor(private router:Router, private crud:CrudService, private route:ActivatedRoute){}

   ngOnInit(): void {
       this.addUserForm = new FormGroup({
        userName : new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        userRole: new FormControl('', Validators.required)
       })

       this.route.params.subscribe(
        params => {
          if(params['id']){
            this.EditUser = true;
            this.userId = +params['id'];
            this.loadUserDate(this.userId)
          }
        }
       )
   }
  loadUserDate(userId: number) {
    this.crud.getUserById(userId).subscribe({
      next:(user)=>{
        this.addUserForm.patchValue(user);
      },
      error: (error) => {
        console.error('Failed to fetch user data', error);
      }
    })
  }

   onSubmit():void{
    if(this.addUserForm.valid){

      const {userName, email, userRole} = this.addUserForm.value;
      const user:User = {userName, email, userRole}
      console.log(user)

      if(this.EditUser){
         this.crud.updateUser(this.userId, user).subscribe({
          next:()=>{
            this.router.navigate(['crud/list']);
          },
          error:(error)=>{
            console.error("failed to update", error);
          }
         })
      }else{
      this.crud.addUser(user).subscribe({
        next:()=>{
          this.router.navigate(['crud/list']);
        },
        error:(error)=>{
          console.error("failed to save", error);
        }
      })
    }
      
    }
   }

}
