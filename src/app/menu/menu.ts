import {Component} from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'app-menu',
    templateUrl:'./menu.html',
    imports:[RouterLinkWithHref,NgbDropdownModule],
    styleUrl:'./menu.css'
})
export class Menu{
}