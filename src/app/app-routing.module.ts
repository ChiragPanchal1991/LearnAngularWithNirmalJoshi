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
import { DynamicRoutingComponent } from './routing/dynamic-routing/dynamic-routing.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { NestedRouteComponent } from './routing/nested-route/nested-route.component';
import { Child1Component } from './routing/nested-route/child1/child1.component';
import { Child2Component } from './routing/nested-route/child2/child2.component';
import { EmployeeComponent } from './routing/dynamic-routing/employee/employee.component';
import { QueryPeramComponent } from './routing/query-peram/query-peram.component';
import { InoutOutputComponent } from './Decorators/inout-output/inout-output.component';
import { ViewChildComponent } from './Decorators/view-child/view-child.component';
import { ContentChildComponent } from './Decorators/content-child/content-child.component';
import { HostbindingHostlistenerComponent } from './Decorators/hostbinding-hostlistener/hostbinding-hostlistener.component';
import { InbuiltPipesComponent } from './pipes/inbuilt-pipes/inbuilt-pipes.component';
import { SlicePipeComponent } from './pipes/slice-pipe/slice-pipe.component';
import { CustomPipeComponent } from './pipes/custom-pipe/custom-pipe.component';

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
  {path:"queryperam-routing",component:QueryPeramComponent},
  {path:"input-output",component:InoutOutputComponent},
  {path:"view-child",component:ViewChildComponent},
  {path:"content-child",component:ContentChildComponent},
  {path:"host-binding-listener",component:HostbindingHostlistenerComponent},
  {path:"inbuilt-pipe",component:InbuiltPipesComponent},
  {path:"slice-pipe",component:SlicePipeComponent},
  {path:"custome-pipe",component:CustomPipeComponent},
  {path:"", redirectTo:"/bindings",pathMatch:"prefix"},//if no route is provided then app will redirect to default route
  {path:"**",component:PageNotFoundComponent}//Provided route is not exist then display configured componets
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
