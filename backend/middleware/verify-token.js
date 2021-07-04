const jwt= require('jsonwebtoken');


module.exports = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    try {
        var decoded = jwt.verify(token, 'secret-password');
        next();
    } catch(err) {
        // err
        res.status(401).json({message:"auth failed!"});
    }
};