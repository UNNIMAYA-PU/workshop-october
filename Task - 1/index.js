import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const books = [
    {
        id: 1,
        img:"https://images-na.ssl-images-amazon.com/images/I/81O1oy0y9eL._AC_UL600_SR600,400_.jpg",
        title:"Where the Crawdads Sing",
        author:"Delia Owens",
    },
    {
        id: 2,
        img:"https://images-na.ssl-images-amazon.com/images/I/711cvCcahjL._AC_UL600_SR600,400_.jpg",
        title:"It Ends with Us",
        author:"Colleen Hoover",
    },
    {
        id: 3,
        img:"https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL._AC_UL600_SR600,400_.jpg",
        title:"The 48 Laws of Power",
        author:"Robert Greene",
    },
    {
        id: 4,
        img:"https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
        title:"I Love You to the Moon and Back",
        author:"Amelia Hepworth",
    },
    {
        id: 5,
        img:"https://images-na.ssl-images-amazon.com/images/I/71Mx-bE91+L._AC_UL600_SR600,400_.jpg",
        title:"It's Not Summer Without You",
        author:"Jenny Han",
    },
    {
        id: 6,
        img:"https://images-na.ssl-images-amazon.com/images/I/71PNGYHykrL._AC_UL600_SR600,400_.jpg",
        title:"It Starts with Us",
        author:"Colleen Hoover",
    },
    {
        id: 7,
        img:"https://images-na.ssl-images-amazon.com/images/I/61NdJMwAThS._AC_UL600_SR600,400_.jpg",
        title:"The Body Keeps the Score",
        author:"Bessel van der",
    },
    {
        id: 8,
        img:"https://images-na.ssl-images-amazon.com/images/I/91cqEsyjd-L._AC_UL600_SR600,400_.jpg",
        title:"The Very Hungry Caterpillar",
        author:"Eric Carle",
    },
    {
        id: 9,
        img:"https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg",
        title:"The Four Agreements",
        author:"Don Miguel Ruiz",
    },
    {
        id: 10,
        img:"https://images-na.ssl-images-amazon.com/images/I/71VgnYA-zgL._AC_UL600_SR600,400_.jpg",
        title:"Life Force",
        author:"Tony Robbins",
    },
    {
        id: 11,
        img:"https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL._AC_UL600_SR600,400_.jpg",
        title:"Run, Rose, Run",
        author:"James Patterson",
    },
    {
        id: 12,
        img:"https://images-na.ssl-images-amazon.com/images/I/612V9dt-NGS._AC_UL300_SR300,200_.jpg",
        title:"Burn After Writing ",
        author:"Sharon Jones",
    },
    {
        id: 13,
        img:"https://images-na.ssl-images-amazon.com/images/I/71eJk7GtUOL._AC_UL300_SR300,200_.jpg",
        title:"The Boy, the Mole, the Fox and the Horse",
        author:"Charlie Mackesy",
    },
    {
        id: 14,
        img:"https://images-na.ssl-images-amazon.com/images/I/81wl+X9KbIL._AC_UL300_SR300,200_.jpg",
        title:"The Great Reset",
        author:"Glenn Beck",
    },
    {
        id: 15,
        img:"https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL._AC_UL300_SR300,200_.jpg",
        title:"The Midnight Library",
        author:"Matt Haig",
    },
 ];


 function BookList() {
    return (
        <section className="booklist"> 
            {books.map((book)=>{
                const {img, title, author } = book;
                return <Book key={book.id } {...book}></Book>;
            })}
        </section>
    );
 }


const Book = ({img, title, author}) => {

    // Events
    // onClick, onMouseOver

    // const clickHandler = (e)=> {
    //     // console.log(e);
    //     console.log("Hello world");
    // };
    const complexExample = (author) =>{
        console.log(author);
    };

    return (
        <article className="book" onMouseOver={() => console.log(title)}>
            <img src={img} alt="" />
            <h1 onClick={() => console.log(author)}>{title}</h1>
            <h4>{author}</h4> 
            {/* <button onClick={(clickHandler)}>example</button> */}
            <button onClick={() => complexExample(author)} className="button-4" role="button">complex example</button>
        </article>
    );
};


ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
