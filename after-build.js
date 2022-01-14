const { promisify } = require('util')
const fs = require('fs')
const glob = promisify(require('glob'))

const unlink = promisify(fs.unlink)

glob('./build/**/*+(.map|.LICENSE.txt)').then((list) => {
  Promise.all(list.map(f => unlink(f)))
})
