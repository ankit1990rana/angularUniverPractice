interface loginUserObj{
    email : string,
    password : string
}

export class userInit{
    // Default
    public user:loginUserObj;
    constructor(){
        this.user = {
            email : '',
            password : ''
        }
    }
}