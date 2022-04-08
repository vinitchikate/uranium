const express = require('express');
const movie = ['puspha','KGF','RRR','Ironman','Blackpanther','Aquaman']//1



const router = express.Router();

router.get('/movies', function (req, res){//2

    res.send(movie)
    
});

router.get('/movies/:indexnumber', function (req, res){

   let i = req.params.indexnumber
   res.send((i<= movie.length && i > 0)?movie[i-1]:
   `${'invalid request:Enter a number betwn 1 to'+" "+movie.length}`)//3
   
});



const film = [ {
    id: 1,
    name: "The Avengers"
    },{
    id: 2,
    name: "Shutter Island"    
    },{
    id: 3,
    name: "The Conjuring"
    },{
    id: 4,
    name: "The Shawshank Redemption"//4
    },{
    id: 5,
    name: "The Godfather"
    },{
    id: 6,
    name: "The Dark Knight"
    },{
    id: 7,
    name: "12 Angry Men"
    },{
    id: 8,
    name: "Schindler's List"
    },{
    id: 9,
    name: "The Lord Of The Rings"
    },{
    id: 10,
    name: "Star Wars"
    }
]

router.get('/films', function (req, res) {
res.send(film)
});


module.exports = router;
// adding this comment for no reason




