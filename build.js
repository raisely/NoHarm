const ctx = require('./source/context'),
    config = require('./source/config'),
    fs = require('fs'),
    path = require('path'),
    ejs = require('ejs')
const data = require('./source/data')

/**
 * @param {string} f
 * @returns {Promise<string>}
 */
function read(f) {
    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(f)
        stream.on('error', reject)
        let res = ''
        stream.on('data', chunk => {
            res += chunk
        })
        stream.on('end', () => resolve(res))
    })
}
/**
 * @param {string} f
 * @param {string} data
 * @returns {Promise<void>}
 */
function write(f, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(f, data, err => {
            if (err) reject(err)
            else resolve()
        })
    })
}

const load_partials = async () => {
    const partials_list = config.templates.partials.map(p => ({
        name: p,
        file: path.resolve(
            config.templates.dir,
            `${config.templates.main}.${config.templates.extension}`
            ),
    })), /** @type {{[key: string]: string}} */ partials = {}

    for (const { name, file } of partials_list) {
        partials[name] = await read(file)
    }
    return partials
}

const start = () => {
    ejs.renderFile(config.main, ctx, (err, txt) => {
        if (err) throw err
        fs.writeFile(config.dest, txt, err => {
            if (err) throw err
        })
    })
}

start()