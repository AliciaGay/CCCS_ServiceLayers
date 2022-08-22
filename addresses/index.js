import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'


import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: 'us-east-1',
    secretAccessKey: '8vvPskqv/Py5wY9WQkvNCufvmtV152yFZOweUxa3',
    accessKeyId: 'AKIAXORLB2J2O2XBTI2N'
}

AWS.config.update(configuration)
// ENDS HERE

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
