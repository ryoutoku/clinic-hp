let segmentCount = 1;
let l = window.location;
let port = l.port ? ':' + l.port : ''
l.replace(
    `${l.protocol}//${l.hostname}${port}/?p=${l.pathname.split('/').slice(0, 1 + segmentCount).join('/')}`
)