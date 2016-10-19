function isPowerOfTwo(verificationNumber, baseOfVerNumber){
    var baseOfVerNumber=2;
    var interjacentNumber=verificationNumber/baseOfVerNumber;
    if (interjacentNumber!=2 && interjacentNumber>2){
        return isPowerOfTwo(verificationNumber-interjacentNumber);
    }
    else if (interjacentNumber===2) {
        return true;
    }
    else {
        return false;
    }
}
