const { Notify } = require('../models/model');
const { getJson } = require("serpapi");

exports.printdata = async () => {
    const data = await Notify.find()
    const data_length = data.length

    for(let i=0;i<data_length;i++){
        const shoppingResults = await new Promise((resolve, reject) => {
            getJson(
            {
                engine: "google_shopping",
                q: data[i].productName,
                api_key: "e46eb16e06b86f316f7c4fcb0059c24f949e1cec889d9dcbdfc087f140452d40",
                gl:"in"
            },
            (json) => {
                if (json) {
                resolve(json.shopping_results.slice(0,5));
                } else {
                reject(new Error('No visual matches found in Google Lens.'));
                }
            }
            );
        });
        console.log(shoppingResults)
    }
}