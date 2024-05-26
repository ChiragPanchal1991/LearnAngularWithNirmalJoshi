import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTestComponent } from './first-test/first-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { InoutOutputComponent } from './Decorators/inout-output/inout-output.component';
import { ViewChildComponent } from './Decorators/view-child/view-child.component';
import { ChildComponent } from './Decorators/inout-output/child/child.component';
import { ViewchildChildComponent } from './Decorators/view-child/viewchild-child/viewchild-child.component';
import { ContentChildComponent } from './Decorators/content-child/content-child.component';
import { ContentchildChildComponent } from './Decorators/content-child/contentchild-child/contentchild-child.component';
import { HostbindingHostlistenerComponent } from './Decorators/hostbinding-hostlistener/hostbinding-hostlistener.component';
import { TextDecoraterDirective } from './Decorators/hostbinding-hostlistener/text-decorater.directive';
import { InbuiltPipesComponent } from './pipes/inbuilt-pipes/inbuilt-pipes.component';
import { SlicePipeComponent } from './pipes/slice-pipe/slice-pipe.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';
import { FormatPhoneNumberPipe } from './pipes/custom-pipe/format-phone-number.pipe';
import { CustomerServiceService } from './custom-service/customer-service.service';
import { CustomersComponent } from './custom-service/customers/customers.component';
import { CCounterComponent } from './custom-service/c-counter/c-counter.component';
import { CCounterChildComponent } from './custom-service/c-counter/c-counter-child/c-counter-child.component';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { FormControlComponent } from './forms/reactive-forms/form-control/form-control.component';
import { FormGroupComponent } from './forms/reactive-forms/form-group/form-group.component';
import { FormArrayComponent } from './forms/reactive-forms/form-array/form-array.component';
import { FormBuilderComponent } from './forms/reactive-forms/form-builder/form-builder.component';
import { FormValidationComponent } from './forms/reactive-forms/form-validation/form-validation.component';

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
    QueryPeramComponent,
    InoutOutputComponent,
    ViewChildComponent,
    ChildComponent,
    ViewchildChildComponent,
    ContentChildComponent,
    ContentchildChildComponent,
    HostbindingHostlistenerComponent,
    TextDecoraterDirective,
    InbuiltPipesComponent,
    SlicePipeComponent,
    CustomPipeComponent,
    FormatPhoneNumberPipe,
    CustomersComponent,
    CCounterComponent,
    CCounterChildComponent,
    TemplateDrivenFormComponent,
    FormControlComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormBuilderComponent,
    FormValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
