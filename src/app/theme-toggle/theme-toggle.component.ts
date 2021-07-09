import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent implements OnInit {
    userPrefersDark =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    userPrefersLight =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches;

    constructor() {}

    ngOnInit(): void {}

    onToggleTheme() {
        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        console.log('currentTheme:', currentTheme);
        if (currentTheme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
}
