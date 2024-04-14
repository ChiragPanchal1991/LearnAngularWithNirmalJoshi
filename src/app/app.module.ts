import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import {FormsModule} from '@angular/forms';
import { NgIfComponent } from './directive/structural-directives/ng-if/ng-if.component';
import { NgForComponent } from './directive/structural-directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './directive/structural-directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directive/attribute-directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directive/attribute-directives/ng-style/ng-style.component';
import { PortfolioBuilderComponent } from './directive/component-directive/portfolio-builder/portfolio-builder.component';
import { NgOnChangesComponent } from './lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { OnChangesChildComponent } from './lifecycle-hooks/ng-on-changes/on-changes-child/on-changes-child.component';
import { NgOnInitComponent } from './lifecycle-hooks/ng-on-init/ng-on-init.component';
import { DynamicRoutingComponent } from './routing/dynamic-routing/dynamic-routing.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { NestedRouteComponent } from './routing/nested-route/nested-route.component';
import { Child1Component } from './routing/nested-route/child1/child1.component';
import { Child2Component } from './routing/nested-route/child2/child2.component';
import { EmployeeComponent } from './routing/dynamic-routing/employee/employee.component';
import { QueryPeramComponent } from './routing/query-peram/query-peram.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTestComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    PortfolioBuilderComponent,
    NgOnChangesComponent,
    OnChangesChildComponent,
    NgOnInitComponent,
    DynamicRoutingComponent,
    PageNotFoundComponent,
    NestedRouteComponent,
    Child1Component,
    Child2Component,
    EmployeeComponent,
    QueryPeramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
