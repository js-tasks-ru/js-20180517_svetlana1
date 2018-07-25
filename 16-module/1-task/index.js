/**
 * processGenerator
 * @param {Generator} gen - генератор
 * @returns {Promise}
 */
function processGenerator(gen) {
    let result = gen.next();
    return new Promise(resolve => {

        function process(result) {
            if (result.done) {
                resolve(result.value);
            }
            else {
                result.value.then(result => process(gen.next(result)))
            }
        }

        process(result);
    });

}


