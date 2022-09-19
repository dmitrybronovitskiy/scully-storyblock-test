import { ChangeDetectionStrategy, Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LinkModel } from '@app/core/model/link.model';
import { ImageModel } from '@app/core/model/image.model';
import { ModalLinkModel } from '@app/core/model/modal-link.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @Input() _editable!: string;
  @Input() topHeader!: LinkModel[];
  @Input() subHeader!: (ModalLinkModel | LinkModel)[];
  @Input() logo!: ImageModel;

  element!: HTMLElement;

  isHeaderAbsolute = false;

  constructor(
    private router: Router
  ) { }

  get fullItems(): any[] {
    return [...(this.topHeader || []), ...(this.subHeader || [])];
  }

  ngOnInit(): void {
    this.element = document.querySelector('.header')!;

    this.events();
  }

  redirectTo(link: string): void {
    const container = document.querySelector('.right-menu-container');

    if (container?.getAttribute('active')) {
      this.openRightMenu();
    }
    this.closeAllOpenedDropDown();

    this.router.navigate([link]);
  }

  getFullModalLinkItems(item: any): any[] {
    return [...(item.leftBlock || []), ...(item.rightBlock || [])];
  }

  events() {
    window.addEventListener('click', this.onClickOutside.bind(this));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const height = 100;
    this.isHeaderAbsolute = document.body.scrollTop > height || document.documentElement.scrollTop > height;
  }

  generateId(value: string): string {
    return value.split(' ').join('-');
  }

  onSubMenuClick(element: MouseEvent): void {
    const target = element.target as HTMLElement;
    const button = target.closest('.menu-drop-down-button');
    const containerId = button!.getAttribute('data-dropdown-toggle');
    const container = document.querySelector(`#${containerId}`);

    if (container?.getAttribute('active')) {
      container.classList.add('hidden');
      container.removeAttribute('active');

      return;
    }

    this.closeAllOpenedDropDown();

    container!.classList.remove('hidden');
    container!.setAttribute('active', 'true');
  }

  onExpansionPanelClick(element: MouseEvent): void {
    const target = element.target as HTMLElement;
    const parent = target.closest('.expansion-panel');
    const content = parent!.querySelector('.expansion-panel-content');
    const upIcon = parent!.querySelector('.icon-up');
    const downIcon = parent!.querySelector('.icon-down');
    const container = parent!.querySelector('.expansion-panel-container');

    if (content!.getAttribute('active')) {
      (content as any).style.removeProperty('height');
      content!.classList.add('h-0');
      content!.removeAttribute('active');

      if (downIcon && upIcon) {
        downIcon.classList.remove('hidden');
        upIcon.classList.add('hidden');
      }

      return;
    }

    (container as any).style.height = `${(container as any).offsetHeight}px`;
    content!.classList.remove('h-0');
    content!.setAttribute('active', 'true');

    if (downIcon && upIcon) {
      downIcon.classList.add('hidden');
      upIcon.classList.remove('hidden');
    }
  }

  onClickOutside(element: MouseEvent) {
    const target = element.target as HTMLElement;

    if (target.closest('.menu-drop-down-content') || target.closest('.menu-drop-down-button')) {
      return;
    }

    this.closeAllOpenedDropDown();
  };

  openRightMenu() {
    const container = document.querySelector('.right-menu-container');
    const body = document.querySelector('body');

    if (container?.getAttribute('active')) {
      body!.classList.remove('overflow-hidden');
      container.classList.remove('w-screen');
      container.classList.add('w-0');
      container.removeAttribute('active');

      return;
    }

    body!.classList.add('overflow-hidden');
    container!.classList.add('w-screen');
    container!.classList.remove('w-0');
    container!.setAttribute('active', 'true');
  }

  closeAllOpenedDropDown() {
    const containers = document.querySelectorAll('.menu-drop-down-content[active]');

    containers.forEach((element) => {
      element.classList.add('hidden');
      element.removeAttribute('active');
    });
  }
}
