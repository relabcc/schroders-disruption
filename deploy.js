const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('./build/CNAME', 'schroders-gsg.relab.cc', (err) => {
  if (!err) {
    ghpages.publish('./build', {
      repo: 'https://github.com/relabcc/schroder-gsg-2021.git',
    });
  }
});
