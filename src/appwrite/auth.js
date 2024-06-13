import {Client , Account , ID } from "appwrite";
import  { configdata } from "../../config/config";

export class AuthService{
    client = new Client()
    account;
    constructor(){
        this.client
            .setEndpoint(configdata.appwriteurl) // Your API Endpoint
            .setProject(configdata.appwriteprojectid); // projectid
            
        this.account = new Account(this.client);

    }
    async signup({email, password, name }) {
            const registeracc =  await this.account.create(ID.unique(),email , password , name);
            this.account.createVerification()
            return this.signin({email , password})
            
        
    } 

    async signin({email , password}){
            return await this.account.createEmailPasswordSession(email, password);

        
    }
    async signout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            
        }
    }
    async getcurrentuser(){
        // try {
        //   return await this.account.get();
        
        // } catch (error) {
        //     console.log("auth service :: getcurrentuser :: error ", error);
        // }
        // return null;
        return await this.account.get();
    }
}; 

const authservice = new AuthService();
export default authservice;