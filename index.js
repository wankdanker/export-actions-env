const github = require('./github.js');
const core = require('@actions/core');

async function run() {
    try {
        await github.exposeRuntime();
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
