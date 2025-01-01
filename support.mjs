export const API = {
    fetch: ({ delay, simulateError }) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (simulateError) {
                    reject(`Error from delay ${delay}`);
                } else {
                    resolve(`Data from delay ${delay}`);
                }
            }, delay);
        });
    }
};

export const sampleErrorData = [
    { delay: 50, simulateError: true },
    { delay: 100, simulateError: false }
];

export const sampleSuccessData = [
    { delay: 100, simulateError: false },
    { delay: 50, simulateError: false }
];
