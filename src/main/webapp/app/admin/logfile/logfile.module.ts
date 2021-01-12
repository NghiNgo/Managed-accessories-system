import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManagedAccessoriesSystemSharedModule } from 'app/shared/shared.module';

import { LogfileComponent } from 'app/admin/logfile/logfile.component';
import { logfileRoute } from 'app/admin/logfile/logfile.route';
import {RouteSelectorComponent} from "app/shared/routes/route-selector.component";
import {RefreshSelectorComponent} from "app/shared/refresh/refresh-selector.component";

@NgModule({
  imports: [ManagedAccessoriesSystemSharedModule, RouterModule.forChild([logfileRoute])],
  declarations: [LogfileComponent, RouteSelectorComponent, RefreshSelectorComponent],
})
export class LogfileModule {}
