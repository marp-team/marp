/**
 * Watch process helper for rollup
 * @see https://github.com/rollup/rollup/issues/1919
 */

const childProcess = require('child_process')

childProcess.spawn('yarn', ['rollup', '-w', '-c'], {
  shell: true,
  stdio: ['pipe', process.stdout, process.stderr],
})
