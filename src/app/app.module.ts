// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
// import { AysComponent } from './ays/ays.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AysComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";

import { AysComponent } from "./ays/ays.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AysComponent],
  imports: [BrowserModule],
  entryComponents: [AysComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const ays = createCustomElement(AysComponent, { injector });
    customElements.define("ays-button", ays);
  }

  ngDoBootstrap() {}
}
