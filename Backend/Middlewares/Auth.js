
const checkAuthentication = (req,res,next)=>{

   try{ const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized access", success: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SEC);
    req.user = decoded;
    next();
   
}
catch (error) {
    return res.status(500).json({ message: "Internal server error", success: false, error: error.message });    
}

}