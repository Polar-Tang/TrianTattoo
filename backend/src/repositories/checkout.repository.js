import mongoose from "mongoose"
import CheckoutSession from "../models/checkout.model.js"

class CheckoutSessionRepository {

    static async createCheckoutSession(checkoutId, cartId, body){
        const small = new CheckoutSession({ 
            checkoutId: checkoutId,
            cartId: cartId,
            cardNumber: body.cardNumber, 
            expiryMonth: body.expiryMonth, 
            expiryYear: body.expiryYear, 
            cvv: body.cvv, 
            country: body.country, 
            address: body.address, 
            active: true
         })
         console.log("The new thing: ",small)
        await small.save()
    }

    static async findCheckoutSession(checkoutId){
        console.log("checkoutId: ", checkoutId)
        console.log("is checkoutId?: ", Boolean(checkoutId))
        
        const checkoutSession = await CheckoutSession.findOne({ "checkoutId": checkoutId })
        console.log(checkoutSession)
        console.log("The complete session",checkoutSession)

       
        // checkoutSession.active = false
        // checkoutSession.save()
        return checkoutSession
    }

}

export default CheckoutSessionRepository


// {
//     "checkoutId": "f76759e85b150d054acbe90408fae60b",
//                 cartId: cartId,
//                 cardNumber: body.cardNumber, 
//                 expiryMonth: body.expiryMonth, 
//                 expiryYear: body.expiryYear, 
//                 cvv: body.cvv, 
//                 country: body.country, 
//                 address: body.address, 
//                 active: true
//     }