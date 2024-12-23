function PassGen(length){
    const characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM!@#$%^&*()"
    let password = ""

    for(i=0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length))
        
    }
    
    
    return password
}

module.exports = PassGen;