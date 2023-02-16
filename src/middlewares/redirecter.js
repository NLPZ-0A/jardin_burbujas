module.exports.redirectioner = (req, res, next) =>{
    try {

        if(req.session.login){
            return res.redirect('/admin/home');
        }
        next();
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message : 'error de red'})
        return;
    }
};