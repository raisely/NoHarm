const ctx = require('./source/context'),
    config = require('./source/config'),
    fs = require('fs'),
    ejs = require('ejs')

/**
 * @param {string} message the message to display
 * @param {'success'|'info'|'error'} type the type of message
 */
const log = (message, type = 'info') => {
    for (const line of message.split('\n')) {
        const fullMessage = ` [ ${type} ] ${line}`
        if (type == 'error') {
            console.error(fullMessage)
        } else if (type == 'info') {
            console.info(fullMessage)
        } else {
            console.log(fullMessage)
        }
    }
}

const $ctx = () => ({...ctx, $ctx})

log(`Reading ${config.main} ...`)
ejs.renderFile(config.main, $ctx(), (err, txt) => {
    if (err) return log(`${err}`, 'error')
    log(`Writing to ${config.dest} ...`)
    fs.writeFile(config.dest, txt, err => {
        if (err) return log(`${err}`, 'error')
        log(`Template written to ${config.dest} from ${config.main}`, 'success')
    })
})