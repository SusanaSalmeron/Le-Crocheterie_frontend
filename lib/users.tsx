import axios from 'axios';
import { getAuthHeaders } from './clientUtils';

interface UserRegisterData {
    name: string,
    lastName: string,
    userEmail: string,
    regPassword: string,
    repeatPassword: string

}

export async function register(dataUser: UserRegisterData) {
    if (dataUser.regPassword === dataUser.repeatPassword) {
        /* try {

        } catch (err: any) {

        } */
        return true
    } else {
        return false
        console.log(dataUser)
    }

}