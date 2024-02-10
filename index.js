const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number
    })
    const ProductModal = mongoose.model('products', ProductSchema);
    let data = new ProductModal({ name: "m 10", price: 1000 });
    let result = await data.save();
    console.log(result);
}

main()



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