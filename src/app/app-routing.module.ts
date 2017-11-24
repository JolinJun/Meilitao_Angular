import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeiliTaoMyComponent, MeiliTaoHomeComponent, MeiliTaoCartComponent } from './components';
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MeiliTaoHomeComponent },
    { path: 'cart', component: MeiliTaoCartComponent },
    { path: 'my', component: MeiliTaoMyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MltRouterModule {

}