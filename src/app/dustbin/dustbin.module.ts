import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DustbinRoutingModule } from './dustbin-routing.module';
import { IndexComponent } from './index/index.component';
import { DustbinViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    DustbinViewComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    DustbinRoutingModule
  ]
})
export class DustbinModule { }
