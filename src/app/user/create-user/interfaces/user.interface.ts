interface userObj{
    name : string,
    email : string,
    dob : String,
    password : string,
    gender : string
}



export class userInit{
    // Default
    public user:userObj;
    constructor(){
        this.user = {
            name : '',
            email : '',
            dob : '',
            password : '',
            gender : 'male'
        }
    }
}