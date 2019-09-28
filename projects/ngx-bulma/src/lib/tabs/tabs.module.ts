import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BulmaTabsComponent } from './tabs.component';



@NgModule({
  declarations: [BulmaTabsComponent],
  imports: [
    CommonModule
  ],
  exports: [BulmaTabsComponent]
})
export class BulmaTabsModule { }