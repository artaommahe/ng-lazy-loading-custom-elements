import { ICustomElements } from '../custom-elements-loader/interface';
import { WOOF_WIDGET_SELECTOR } from './const';

export const DOGS_WIDGETS: ICustomElements = {
  modulePath: 'src/app/+dogs/module#DogsModule',
  selectors: [
    WOOF_WIDGET_SELECTOR,
  ],
};
