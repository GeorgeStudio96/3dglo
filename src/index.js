import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import smooth from './modules/smooth';
import validate from './modules/validate';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import test from './modules/test';
import sendForm from './modules/sendForm';

timer('22 march 2023')
menu()
modal()
smooth()
validate()
tabs()
slider()
calc()
test()
sendForm(
    {
        formId: 'form113',
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ]
    }
)
