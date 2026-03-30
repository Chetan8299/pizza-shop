import { Config } from './config/index.js'

function welcome(name: string) {
    console.log(`Welcome ${name} to the server running on port ${Config.port}`)
}

welcome('Chetan')
