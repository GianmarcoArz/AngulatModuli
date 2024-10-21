import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiSiamoRoutingModule } from './chi-siamo-roting.module';
import { SharedModule } from '../../shared/shared.module';
import { ChiSiamoComponent } from './chi-siamo.component';

@NgModule({
  declarations: [ChiSiamoComponent],
  imports: [CommonModule, ChiSiamoRoutingModule, SharedModule],
})
export class ChiSiamoModule {}
