const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
        
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;