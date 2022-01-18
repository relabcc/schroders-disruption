const fs = require('fs');
const ghpages = require('gh-pages');

fs.writeFile('./build/CNAME', 'schroders-disruption.relab.cc', (err) => {
  if (!err) {
    ghpages.publish('./build', {
      repo: 'https://github.com/relabcc/schroders-disruption.git',
    });
  }
});
