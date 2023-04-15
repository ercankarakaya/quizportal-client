import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/models/user.model';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { imageData } from '../../utils/image.const';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User = new User();
  profileImageSource: any;
  uploadedImage: File;
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  

  constructor(
    private tokenService: TokenStorageService,
    private userService: UserService,
    private snackBarService: SnackbarService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.user.fullName = this.user.firstName + ' ' + this.user.lastName;

    if(this.profileImageSource==null){
      this.userService.getUserProfileImage(this.user.id).subscribe(
        (data) => {
          this.profileImageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${data}`);
          console.log("profileImageSource -> ",this.profileImageSource);
        },
        (error) => {
          this.snackBarService.error(error);
          console.log('response error-> ', error);
        }
      );
    }

    // this.profileImageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${imageData}`);
  }

  public onImageUpload(event) {
    this.uploadedImage = event.target.files[0];
  }

  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    this.userService.uploadUserProfileImage(this.user.id,imageFormData)
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      },(error) => {
        this.snackBarService.error(error);
        console.log('response error-> ', error);
      }
      );
    }

}
