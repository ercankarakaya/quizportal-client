import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/auth/guard/admin/admin.guard';
import { UserGuard } from './services/auth/guard/user/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Home' },
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
    data: { title: 'Signup' },
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
    data: { title: 'Login' },
  },
  {
    path: 'admin',
    component: DashboardComponent,
    // pathMatch: 'full',
    data: { title: 'Admin Dashboard' },
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    data: { title: 'User Dashboard' },
    canActivate: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
