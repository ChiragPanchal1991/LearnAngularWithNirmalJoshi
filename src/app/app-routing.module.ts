import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstTestComponent } from './first-test/first-test.component';
import { NgIfComponent } from './directive/structural-directives/ng-if/ng-if.component';
import { NgForComponent } from './directive/structural-directives/ng-for/ng-for.component';
import { NgSwitchComponent } from './directive/structural-directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directive/attribute-directives/ng-class/ng-class.component';
import { PortfolioBuilderComponent } from './directive/component-directive/portfolio-builder/portfolio-builder.component';
import { NgStyleComponent } from './directive/attribute-directives/ng-style/ng-style.component';
import { NgOnChangesComponent } from './lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './lifecycle-hooks/ng-on-init/ng-on-init.component';
import { DynamicRoutingComponent } from './dynamic-routing/dynamic-routing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NestedRouteComponent } from './nested-route/nested-route.component';
import { Child1Component } from './nested-route/child1/child1.component';
import { Child2Component } from './nested-route/child2/child2.component';
import { EmployeeComponent } from './dynamic-routing/employee/employee.component';

const routes: Routes = [
  {path:"bindings",component:FirstTestComponent},
  {path:"directive/ngif", component:NgIfComponent},
  {path:"directive/ngfor", component:NgForComponent},
  {path:"directive/ngswitch", component:NgSwitchComponent},
  {path:"directive/ngclass",component:NgClassComponent},
  {path:"directive/ngstyle",component:NgStyleComponent},
  {path:"directive/portfolioBuilder",component:PortfolioBuilderComponent},
  {path:"hooks/ng-on-changes",component:NgOnChangesComponent},
  {path:"hooks/ng-on-init",component:NgOnInitComponent},
  {path:"dynamic-emp/:id/:name",component:EmployeeComponent},
  {path:"dynamic-routing",component:DynamicRoutingComponent},
  {path: 'nested-route', component: NestedRouteComponent, children: [
    {path: 'child1', component: Child1Component},
    {path: 'child2', component: Child2Component},
  ]},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
