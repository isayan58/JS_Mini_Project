function bookBorrower(book, id)
{
    const len = book.length;
    const user = book[len-1].lender;
    console.log(user);
    return user;
}