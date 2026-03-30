import { config } from 'dotenv'
config()

const { PORT, NODE_ENV } = process.env

export const Config = {
    port: PORT || 3000,
    nodeEnv: NODE_ENV || 'development',
}
