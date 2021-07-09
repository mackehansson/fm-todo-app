import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    userPrefersLight =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;

    ngOnInit(): void {
        document.addEventListener('DOMContentLoaded', (event) => {
            if (this.userPrefersDark) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        });
    }
}
