const { performance } = require('perf_hooks');

module.exports.timeResponse = (req, res, next) => {
    const start = performance.now();

    res.on('finish', ()=>{
        const end = performance.now();
        const time = end - start;
        console.log(`tiempo de respuesta: ${time} ms`);
        res.setHeader('X-Response-Time', `${time} ms`);
        res.end()
        return;
    });

    next();
};