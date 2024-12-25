export const BigAuthors = ({author}) => {
    const {name, age, country, books} = author;
    return (
        <>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h4>Books</h4>
            <ul>
                { books.map((book) => ( <li key={book}> {book}</li> ) )}
            </ul>
            <p>============================================</p>
            
        </>
    );
}