import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-site-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './site-navbar.component.html',
  styleUrl: './site-navbar.component.scss'
})
export class SiteNavbarComponent {

}
