/*!
 * Copyright (c) 2018, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

import config from './app.config';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { UploadDataComponent } from './upload-data/upload-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { GoogleChartsModule, GoogleChartComponent } from 'angular-google-charts';
import { SalesByGenderComponent } from './graphics/sales-by-gender/sales-by-gender.component';
import { SalesByProductComponent } from './graphics/sales-by-product/sales-by-product.component';
import { ProductByHoraQtyComponent } from './graphics/product-by-hora-qty/product-by-hora-qty.component';
import { ProductByHoraSalesComponent } from './graphics/product-by-hora-sales/product-by-hora-sales.component';
import { ProfitComponent } from './graphics/profit/profit.component';
import { AvgDeliveryTimeComponent } from './graphics/avg-delivery-time/avg-delivery-time.component';
import { DeliveryTimeRegressionComponent } from './graphics/delivery-time-regression/delivery-time-regression.component';
import { DrilldownMenuComponent } from './graphics/drilldown-menu/drilldown-menu.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [ OktaAuthGuard ],
  },

  {
    path: 'upload-data',
    component: UploadDataComponent,
    canActivate: [ OktaAuthGuard ],
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ OktaAuthGuard ],
  },
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MessagesComponent,
    UploadDataComponent,
    DashboardComponent,
    UploadFileComponent,
    SalesByGenderComponent,
    SalesByProductComponent,
    ProductByHoraQtyComponent,
    ProductByHoraSalesComponent,
    ProfitComponent,
    AvgDeliveryTimeComponent,
    DeliveryTimeRegressionComponent,
    DrilldownMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OktaAuthModule,
    RouterModule.forRoot(appRoutes),
    GoogleChartsModule,
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config.oidc },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
