const express = require('express');
const movie = ['puspha','KGF','RRR','Ironman','Blackpanther','Aquaman','Joker']//1







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



router.get('/films/:filmid', function (req, res){

    let i = req.params.filmid
    res.send((i>0&&i<=film.length)?film[i-1]:
    `${'invalid request:Enter a number betwn 1 to'+" "+film.length}`)//5
    
 });


 let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
    let result = true;
 for(let i=0;i<players.length;i++)
 {
     if(players[i]["name"]==req.body["name"])
     {
      result = false
     }
 } 
 if(result==true)
 {
     players.push(req.body)
 }
    res.send(  { data: players , status: result }  )
})


module.exports = router;
// adding this comment for no reason




