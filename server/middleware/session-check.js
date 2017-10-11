module.exports = function(req, res, next) {
    const {session} =req;
    if(!session.user){
        session.user = {
            first_name:'',
            last_name:'',
            email:'',
            cart:[],
            total: 0
        }
        nest();
    }
}