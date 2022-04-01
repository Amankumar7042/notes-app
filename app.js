const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes.js");

yargs.version('1.1.0')

yargs.command({
    command :"add",
    describe : "Add a new note",
    builder:{
        title:{
            describe:"notes title",
            demandOption: true,
            type:"string",
        },
        body:{
            describe:"Notes Body",
            demandOption: true,
            type:"string",
        }

    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command :"remove",
    describe : "remove a  note",
    builder:{
        title:{
            describe:"remove notes title",
            demandOption: true,
            type:"string",
        }
    },

    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command :"list",
    describe:"listing the notes",
    handler(argv){
        notes.listNotes();
    }
})
yargs.command({
    command:"read",
    describe:"reading the notes",
    builder:{
        title:{
            describe:"read note",
            demandOption: true,
            type:"string",
        }
    },
    handler(argv){
        notes.ReadNotes(argv.title);

    }
})

yargs.parse()