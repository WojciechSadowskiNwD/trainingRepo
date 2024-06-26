import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "First Lorem ipsum dolor sit mexicano aregiatto amet consectetur adipisicing elit. Et eaque ipsa doloremque, reprehenderit aliquid tempora similique animi iusto, sit debitis provident atque voluptate? Ipsa, adipisci eligendi! Fugit a sint facere!"
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego",
        author: "Mateusz Charakis",
        text: "Second Lorem srorem piti piti tutu tittaaa dolor sit amet consectetur adipisicing elit. Et eaque ipsa doloremque, reprehenderit aliquid tempora similique mito gracias animi iusto, sit debitis provident leppee areas atque voluptate? Ipsa, adipisci eligendi! Fugit a sint facere!"
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "Gregory Xorra",
        text: "Third Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem asperiores fuga soluta odit ea dolorum optio liberto arepiczko lala pirafara voluptatum doloremque omnis delectus ab dolor quas corporis a ullam beatae adipisci atque, libero maxime sed, natus fugiat."
    },
]

const HomePage = () => {
    
    const artList = articles.map(article => (
        // <Article key={article.id} title={article.title} author={article.author} text={article.text} />
        <Article key={article.id} {...article} />
    ))
    return ( 
        <div className="home" >
            {artList}
        </div>
     );
}
 
export default HomePage;