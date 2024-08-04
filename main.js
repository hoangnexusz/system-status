const express = require('express');
const os = require('os');
const osUtils = require('os-utils');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    osUtils.cpuUsage((cpuPercentage) => {
        const status = {
            cpuUsage: (cpuPercentage * 100).toFixed(2) + '%',
            freeMemory: (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
            totalMemory: (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB',
            uptime: (os.uptime() / 3600).toFixed(2) + ' hours',
        };
        res.json(status);
    });
});

app.listen(port, () => {
    console.log(`</> http://localhost:${port}`);
});
