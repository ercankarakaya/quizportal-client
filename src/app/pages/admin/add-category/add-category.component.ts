import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = { title: '', description: '' };

  constructor(
    private categoryService: CategoryService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  addCategory() {
      if (this.category.title.trim() == '' || this.category.title == null) {
        this.snackbarService.error({message:'Title required!'});
        return;
      }
      if (this.category.description.trim() == '' || this.category.description == null ) {
        this.snackbarService.error({message:'Description required!'});
        return;
      }
      this.categoryService.addCategory(this.category).subscribe(
        (data: any) => {
          Swal.fire(
            'Success',
            'Category has been successfully added.',
            'success'
          );
          this.reset();
        },
        (error) => {
          this.snackbarService.error(error);
        }
      );
   
  }

  reset(){
    this.category = { title: '', description: '' };
  }

}
