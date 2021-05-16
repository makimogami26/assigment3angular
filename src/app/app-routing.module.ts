import {NgModule} from '@angular/core'
import {Routes , RouterModule} from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { ViewdetailComponent} from './components/shopping-cart/viewdetail/viewdetail.component'
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { from } from 'rxjs'
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component'
import { HomeComponent } from './components/home/home.component'


const routes : Routes =[
    {path : "", redirectTo:'/Home' , pathMatch: "full"},
    {path : 'login', component: LoginComponent},
    {path : 'register', component: RegisterComponent},
    {path : 'ShopCart', component: ShoppingCartComponent},
    {path : 'Home', component: HomeComponent},
    {path : 'product/:id', component:ViewdetailComponent},
    {path : '**', component : PageNotFoundComponent},
   
] 


@NgModule({
    imports:[RouterModule.forRoot(routes)],

    exports:[RouterModule]
})


export class AppRoutingModule{

}
