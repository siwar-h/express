const express = require('express');
const app=express();
const Port=5000;
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render()
    
}
)

//app.get('/',(req,res)=>{
    //res.send('hello')
    //res.end()})
    const middle = (req, res, next) => {
        const d = new Date(Date.now());
        const day = d.getDay();
        const hour = d.getHours();
        
        if ((day >= 2 && day <= 5) && (hour >= 9 && hour < 17)) {
            next();
        } else {
            res.send('We are not available right now! Come back during business hours.');
        }
    };
    
    app.use(middle);
    





app.listen(Port,(err)=>{
    err ? console.log('err',err) : console.log(`server is running on port:${Port}`)
})