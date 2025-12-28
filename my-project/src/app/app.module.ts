import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // provides collections of services and directives needed to run the app in a browser
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';


@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent], // used for non-standalone components
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule, TasksModule] // used for standalone components and other modules
})
export class AppModule { }