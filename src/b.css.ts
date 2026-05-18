import { style, assignVars } from '@vanilla-extract/css';
import { componentContract as otherComponentContract } from './a.css';

export const b = style({
    vars: assignVars(otherComponentContract.color, {
      primary: 'red',
    })
});
