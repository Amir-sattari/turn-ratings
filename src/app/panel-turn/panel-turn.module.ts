import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelTurnRoutingModule } from './panel-turn-routing.module';
import { PanelComponent } from './panel/panel.component';


@NgModule({
  declarations: [
    PanelComponent
  ],
  imports: [
    CommonModule,
    PanelTurnRoutingModule
  ]
})
export class PanelTurnModule { }
