function pwdgen(length){
    let character = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_"
    let pass =" "

    for(i=0;i<length;i++){
        pass+=character.charAt(Math.floor(Math.random()*character.length))

    }
    return pass
}

module.exports = pwdgen