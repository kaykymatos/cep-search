import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteNavbarComponent } from "./components/site-navbar/site-navbar.component";
import { HomeComponent } from "./pages/home/home.component";
import { SiteFooterComponent } from "./components/site-footer/site-footer.component";
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
                <app-site-navbar></app-site-navbar>
                <div class="container" style="
    text-align: -webkit-center;">
                <router-outlet></router-outlet>
</div>
                <app-site-footer></app-site-footer>
            `,
  imports: [
    RouterOutlet,
    SiteNavbarComponent,
    HomeComponent,
    SiteFooterComponent]
})
export class AppComponent {
  title = 'cep-search';
}
