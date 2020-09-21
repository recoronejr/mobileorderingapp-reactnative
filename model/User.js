 export default class UserModel {
    
    firstName: string;
    lastName: string;
    phoneNumber: int;
    email: string;

    constructor(
        firstName = "",
        lastName = "",
        phoneNumber = "",
        email = "",
        )
        
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

