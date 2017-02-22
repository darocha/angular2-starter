import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FilterTextModule } from './filter-text/filter-text.module'
import { InitCapsPipe } from './init-caps.pipe';

@NgModule({
  imports: [CommonModule, FilterTextModule, FormsModule],
  exports: [CommonModule, FilterTextModule, FormsModule, InitCapsPipe],
  declarations: [InitCapsPipe]
})
export class SharedModule {}
