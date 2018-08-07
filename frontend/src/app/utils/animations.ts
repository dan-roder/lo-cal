import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';

export const SlideUpAnimation = [
  trigger('slideUp', [
    state('1', style({height: '0'})),
    transition('* => 1', animate('250ms ease-in-out'))
  ])
]