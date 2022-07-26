/**
 * @param {string[]} ls
 */
function join(ls, {
    empty = '(empty)',
    final_sep = 'and',
    item_sep = ','
} = {}) {
    if ((!ls) && (ls.length <= 0))
        return empty
    if (ls.length == 0)
        return ls[0]
    if (ls.length == 2)
        return `${ls[0]} ${final_sep} ${ls[1]}`
    ls = ls.slice()
    const last = ls.pop()
    return `${ls.join(`${item_sep} `)}${item_sep} ${final_sep} ${last}`
}

const ctx = {
    ...require('./data'),
    join,
}
module.exports = ctx