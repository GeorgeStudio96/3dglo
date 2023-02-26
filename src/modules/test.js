import { slicer } from './helpers'

const test = () => {
    const text = '    Это рыбный текст для проверки функции слайсер    '
    console.log(slicer(text, 20));
}

export default test

