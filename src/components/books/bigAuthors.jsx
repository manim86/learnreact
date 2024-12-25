export const LargeListItemBooks = ({book}) => {
    const {name, price, title, pages} = book;
    console.log(book)
    return(
        <>
            <h2>{name}</h2>
            <p>{price}</p>
            <h3>Title: { title }</h3>
            <p>Pages: {pages}</p>
            <p>============================================</p>
        </>
    );
}