
import { parse } from 'dotenv';
import getBookById from './getBookById.js'

export default async function getOrderAmount(books) {
    let amount = 0; 
    // console.log("💤",books)
    
    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        // console.log("ojkitoooooooo", book.id)

        const bookDB = await getBookById(book.id)
        // console.log("veamos qué trae de la base de datosxd", bookDB)
        
        
        let operation = bookDB.price * book.qty 
        amount += operation;
    }
    const onlyTwoDecimals = amount.toFixed(2);
    const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10)
    console.log(parsedAmount)
    return parsedAmount;
} 
