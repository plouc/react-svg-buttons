var path = require('path');

require('fs').readdirSync('./gulp/tasks/')
    .filter(function (name) {
        return /(\.(js)$)/i.test(path.extname(name));
    })
    .forEach(function (task) {
        require('./tasks/' + task);
    })
;
