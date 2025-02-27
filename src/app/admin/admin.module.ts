import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [AdminComponent, AuthComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  providers: [AuthGuard],
})
export class AdminModule {}
