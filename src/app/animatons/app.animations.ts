import { trigger, state, style, animate, transition } from '@angular/animations';
export const searchAnimation = trigger('FadeIn', [
    state('in', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
    transition('void => *', [
        style({ transform: 'translate3d(100%, 0, 0)' }),
        animate(400, style({ transform: 'translate3d(0, 0, 0)' }))
    ]), // 进场动画
    transition('* => void', [
        animate(400, style({ transform: 'translate3d(-100%, 0, 0)' }))
    ])  // 离场动画
]);

export const colorState = trigger('colorStateChange', [
    state('active', style({ color: '#FA145F' })),
    state('inactive', style({ color: '#333333' })),
    transition('active => inactive', animate('500ms ease-in')),
    transition('inactive => active', animate('500ms ease-out'))
]);

export const rotateAnimation = trigger('rotate', [
    state('in', style({ opacity: 1, transform: 'translate3d(0,0,0)' })),
    transition('void => *', [
        style({ transform: 'translate3d(100%, 0, 0)' }),
        animate(400, style({ transform: 'translate3d(0, 0, 0)' }))
    ]), // 进场动画
    transition('* => void', [
        animate(400, style({ transform: 'translate3d(-100%, 0, 0)' }))
    ])  // 离场动画
]);