
import getBookById from './getBookById.js'

export default async function getOrderAmount(books) {
    let amount = 0; 

    for (let index = 0; index < books.length; index++) {
        const book = books[index];
        const bookDB = await getBookById(book.id)

        let operation = bookDB.price * book.qty 
        amount += operation;
    }
    const onlyTwoDecimals = amount.toFixed(2);
    const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10)
    return parsedAmount;
} 