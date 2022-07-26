const ctx = require('./source/context'),
    config = require('./source/config'),
    fs = require('fs'),
    ejs = require('ejs')

const $ctx = () => ({...ctx, $ctx})

ejs.renderFile(config.main, $ctx(), (err, txt) => {
    if (err) throw err
    fs.writeFile(config.dest, txt, err => {
        if (err) throw err
    })
})