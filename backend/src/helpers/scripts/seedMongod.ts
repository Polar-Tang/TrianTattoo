import Product from '../../models/product.models.js'
import CheckoutSession from "../../models/checkout.model.js"
import bcrypt from 'bcrypt'
import User from '../../models/user.models.js';
import mongoose from 'mongoose';


export const createProducts = async () => {
  try {

    const products = [
      {
        image_url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price: 100,
        stock: 5,
        description: "rather for worshiping or simply decoration, everyone will need one as the sea rises to reclaim this doomed world...",
        category: "stone",
        seller_name: "1",
        title: 'godfish idol',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1682686581551-867e0b208bd1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 500,
        price: 2,
        description: "'Ough, What do smell like?' Just like the best Massachusetts fresh fish, fish from Insmouth, 2 dollars per unity",
        category: "insmouth fish",
        seller_name: "2",
        title: 'insmouth fish',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 30,
        price: 1000,
        description: "A cyclopean monolith that measures meters, perfect for decorating a garden and bringing strange events into your miserable life.",
        category: "Submarine Obelisk",
        seller_name: "3",
        title: 'image 3',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1700744228339-03c725f5ee57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 100,
        price: 80,
        description: "Lost civilizations older than Earth, rites for communing with the blind idiot god Azathoth, and the geometry of forgotten stars under which dread Cthulhu dreams. The Necronomicon is no mere book—it is an invitation to annihilation.",
        category: "Magic",
        seller_name: "Abdul Alhazred, the Mad Arab",
        title: 'Necronomicon (Order of Dagon edition)',
        active: true
      },
      {
        _id: new mongoose.Types.ObjectId(),
        image_url: 'https://images.unsplash.com/photo-1700839154423-83ea2246621b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 40,
        price: 50,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "Charles Dexter Ward",
        title: 'image 5',
        active: true
      },
      {
        _id: new mongoose.Types.ObjectId(),
        image_url: 'https://images.unsplash.com/photo-1700770845346-7e95de335eb0?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 70,
        price: 40,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "Charles Dexter Ward",
        title: 'image 6',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 25,
        price: 70,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "7",
        title: 'image 7',
        active: true
      },
      {
        image_url: 'https://plus.unsplash.com/premium_photo-1698442704192-086265cf630e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 25,
        price: 100,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "8",
        title: 'image 8',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1700753227268-8832c285591e?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 75,
        price: 10,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "9",
        title: 'image 9',
        active: true
      },
      {
        image_url: 'https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        stock: 90,
        price: 10,
        description: "Spores, and spores, and spores...",
        category: "Magic",
        seller_name: "10",
        title: 'image 10',
        active: true
      },
      {
        title: 'image 11',
        price: 10,
        stock: 90,
        description: 'Ticket',
        category: 'magic',
        seller_name: '11',
        image_url: 'https://images.unsplash.com/photo-1700769025506-6c3dcb9ec9b7?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        createdAt: '2025-04-03T01:43:17.077Z',
        updatedAt: '2025-04-03T01:43:17.077Z',
        active: false
      }
    ];

    await Product.insertMany(products);
    console.log("Products seeded");
  } catch (err) {
    console.log("An error when we were seed has happened: ", err)
  }
}


export const createCards = async () => {
  try {
    const checkoutSessions = [
      {
        paymentTime: 1,
        cardholderName: "Charles Dexter Ward",
        cardNumber: "6694580695799579",
        expiryMonth: "5",
        expiryYear: "2029",
        total: 500,
        cvv: "564",
        country: "usa",
        credit: 5000,
        address: "51 Gano St, Providence, Rhode Island",
        active: true
      },
      {
        paymentTime: 1,
        cardholderName: "Herbert West",
        cardNumber: "1234067811793671",
        expiryMonth: "1",
        expiryYear: "2031",
        cvv: "123",
        country: "usa",
        credit: 3400,
        total: 1400,
        address: "137 Washington, Arkham, Massachusetts",
        active: true
      },
      {
        paymentTime: 2,
        cardholderName: "Herbert West",
        cardNumber: "1234067811793671",
        expiryMonth: "1",
        expiryYear: "2031",
        cvv: "123",
        credit: 2000,
        total: 300,
        country: "usa",
        address: "137 Washington, Arkham, Massachusetts",
        active: true
      },
      {
        cardholderName: "Robert Olmstead",

        cardNumber: "5901459740715409",
        expiryMonth: "3",
        expiryYear: "2033",
        cvv: "457",
        credit: 750,
        country: "usa",
        address: "777 The fisherman, Insmouth, Massachusetts",
        active: true
      },
    ]
    await CheckoutSession.insertMany(checkoutSessions);
    console.log("checkoutSessions seeded");
  } catch (err) {
    console.log("An error when we were seed has happened: ", err)
  }
}

export const createUsers = async () => {
  try {
    const hashedPassword = await bcrypt.hash("josephC0rwell", 10)

    const charlesdexterward = {
      _id: new mongoose.Types.ObjectId(),
      name: "Charles Dexter Ward",
      password: hashedPassword,
      email: "charlesdexterward@gmail.com",
      active: true,
      products: [],
      role: "admin",
      emailVerified: true,
      verificationToken: "",
      bio: "I like to walk over the antique gardence of providence, Joseph Corwell but i like most that no one knock the doors, even if someone needs it",
      location: "Providence, Massachusetts",
    }
    const charlesdexterward_user = new User(charlesdexterward)

    await charlesdexterward_user.save()
    const products = await Product.find({ seller_name: charlesdexterward_user.name });
    const products_ids: mongoose.Types.ObjectId[] = []
    await Promise.all(products.map(async (product) => {
      product.seller_id = charlesdexterward_user._id;
      if (product._id) {
        products_ids.push(product._id)
      }
      await product.save();
    }))
    charlesdexterward_user.products = products_ids
    await charlesdexterward_user.save()

    console.log("users seeded");
  } catch (err) {
    console.log("An error when we were seed has happened: ", err)
  }

}