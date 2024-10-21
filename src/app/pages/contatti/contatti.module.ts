import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from './contatti.component';
import { ContattiRoutingModule } from './contatti-roting.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ContattiComponent],
  imports: [CommonModule, ContattiRoutingModule, SharedModule],
})
export class ContattiModule {}
