function isPowerOfTwo(verificationNumber){
    if ((Math.pow(2,Math.log2(verificationNumber)))===verificationNumber){
        return true;
    }
    else {
        return false;
    }

}