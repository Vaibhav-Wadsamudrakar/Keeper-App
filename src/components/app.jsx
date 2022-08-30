import React from "react";
import notes from "../notes";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";

function app() {

    return (
    <div>
        <Header/> {
        notes.map((noteItem)=> 
             (
                <Note 
                key={noteItem.key} 
                title={noteItem.title} 
                content={noteItem.content}
                />
        ))}
        <Footer/>
    </div>
    )
}

export default app;