const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id: {
        type: String,
        
    },
    name: {
        type: String,
        required: true
    },

    description: {
        type:String
        
    },
    price: {
        type: Number,
        required: true,
        min: 100,
        max: 500,
        default:300
    },
    asset: {
        url: {
            type: String,
            required: true
        }
}
});

const productItem = mongoose.model('products', productSchema);
module.exports = productItem;