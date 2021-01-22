export class UserInfo {
    firstName: string;
    lastName:string
    email: string;
    phone: string;
    city: string;

    constructor(firstName:string, lastName:string, email:string, phone:string, city:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.city = city;
    }
}
