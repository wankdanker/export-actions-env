const core = require('@actions/core');

async function exposeRuntime() {
    Object.keys(process.env).forEach(function (key) {
        if (key.startsWith('ACTIONS_')) {
            core.info(`${key}=${process.env[key]}`);
            core.exportVariable(key, process.env[key]);
        }
    });
}

module.exports = {
    exposeRuntime
}