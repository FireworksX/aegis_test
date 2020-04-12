/**
 *
 * @param val
 * @example val = 74728452874 => +7 472 845-28-74
 */
export default function (val: string): string {
    const splitString = val.split('')
    if (splitString.length === 11 && splitString[0] === '7') {
        splitString.splice(0, 1, '+7 ')
        splitString.splice(1, 0, ' ')
        splitString.splice(5, 0, '  ')
        splitString.splice(9, 0, '-')
        splitString.splice(12, 0, '-')
    }
    return splitString.join('')
}
