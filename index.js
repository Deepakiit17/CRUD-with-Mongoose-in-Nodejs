const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-comm');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String

});

const saveInDB = async () => {
    const Product = mongoose.model('products', productSchema);
    let data = new Product({
        name: "max 100",
        price: 200,
        brand: 'maxx',
        category: 'Mobile'
    });
    const result = await data.save();
    console.log(result);
}

const updateInDB =async  () => {
    const Product = mongoose.model('products', productSchema);
    let data =await  Product.updateOne(
        { name: "max 6" },
        {
            $set: { price: 550,name:'max pro 6' }
        }
    )
    console.log(data)
}

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.deleteOne({name:'max 100'})
    console.log(data);
}
const findInDB = async ()=>{
    const Product = mongoose.model('products', productSchema);
    let data = await Product.find({name:'max pro 611'})
    console.log(data);
}

findInDB();




// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'public');

// // app.use(express.static(publicPath));

// app.set('view engine', 'ejs');

// app.get('', (_, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile', (_, resp) => {
//     const user = {
//         name: 'deepak meena',
//         email: 'deepak@test.com',
//         city: 'jaipur'
//     }
//     resp.render('profile', {user});
// })

// app.get('/aboutme', (_, resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help', (_, resp) => {
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

// app.listen(5000);

// const express = require('express');
// const app = express();

// app.get('', (req, res) => {
//     console.log("data sent by browser =>> ", req.query.name)
//     res.send('Hello,' + req.query.name);
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, this is About page');
// });

// app.get('/help', (req, res) => {
//     res.send('Hello, this is Help page');
// });

// app.listen(5000);