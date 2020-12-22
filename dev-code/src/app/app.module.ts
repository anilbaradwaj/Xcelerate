import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleGuideModule } from './style-guide/style-guide.module';
import { CoreModule } from './core/core.module';
import {OverlayContainer} from '@angular/cdk/overlay';
import { ResourcesModule } from './resources/resources.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogBoxComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    StyleGuideModule,
    ResourcesModule,
    RouterModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [DialogBoxComponent]
})
export class AppModule {
    constructor(overlayContainer: OverlayContainer) {
        // overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
    }
}
