const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>  "your notes....";

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.find((notes) => notes.title === title )  

    if(!duplicateNotes){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("item entry is done now!"))
    }else{
        console.log(chalk.red.inverse("Opps Duplicate item!"))
    }
}

    const removeNote = (title) => {
        const notes = loadNotes();
        const notesToKeep = notes.filter((notes)=>  notes.title !== title )  
        saveNotes(notesToKeep);
        if(notes.length > notesToKeep.length){
            console.log(chalk.green.inverse(' Note has been removed!'))
        }else{
            console.log(chalk.red.inverse('No Note has been removed!'))
        }     
    }
    const listNotes= ()=>{
        const notesdata = loadNotes();
        console.log(chalk.yellow('Your notes'))

        notesdata.forEach( (notes)=>{
            console.log(chalk.green("title: " + notes.title + "  Body: " + notes.body) ) 
        })
    }
    const ReadNotes= (title)=>{
        const notesdata = loadNotes();
        const readnotes = notesdata.find( (titles)=> title === titles.title)
        if(readnotes){
            console.log(chalk.green("title: " + readnotes.title + "  Body: " + readnotes.body) ) 
        }else{
            console.log(chalk.red.inverse('No Note found!'))
             
        }
    }

    const saveNotes =(notes)=>{
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJSON)

    }
    const loadNotes = ()=>{
        try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        const notesdata = JSON.parse(dataJSON);
        return notesdata;
        }catch(e){
            return []
        }
    }

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    ReadNotes:ReadNotes
} 