var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const results = new Array(functions.length);
        let completed = 0;

        if (functions.length === 0) {
            resolve([]);
            return;
        }

        functions.forEach((fn, index) => {
            fn()
                .then((result) => {
                    results[index] = result;
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
};