import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { FlashCardComponent } from './flash-card/flash-card';
@NgModule({
	declarations: [FlashCardComponent],
	imports: [IonicModule],
	exports: [FlashCardComponent]
})
export class ComponentsModule { }
