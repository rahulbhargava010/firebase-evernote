import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItems from '../sidebarItems/sidebarItems';

class Sidebar extends React.Component {

    constructor(){
        super()
        this.state = {
            addingNote: false,
            text: ''
        }
    }

    render() {

        const { classes, notes, selectedNoteIndex } = this.props

        if(notes) {
            return (
                <div className={classes.sidebarContainer}>
                    <button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}
                    >{ this.state.addingNote ? 'Cancel' : 'New Note'}</button>

                    {
                        this.state.addingNote ?

                        (<div>
                            <input className={classes.newNoteInput} type="text"
                            placeholder="Enter Note Title" 
                            onKeyUp = {(e) => this.updateTitle(e.target.value)} />
                            <button className={classes.newNoteSubmitBtn} onClick={this.newNote}>Submit Note</button>
                        </div>) : 

                        null
                        
                    }
                    <List>
                        {
                            notes.map( (item, index) => {
                                return (
                                    <div key={index}>
                                        <SidebarItems 
                                        note = {item}
                                        index = {index}
                                        selectedNoteIndex = {selectedNoteIndex}
                                        selectNote = {this.selectNote}
                                        deleteNote = {this.deleteNote} />
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>

                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);

    newNoteBtnClick = () => {
        this.setState({
            title: null,
            addingNote: !this.state.addingNote
        })
    }

    updateTitle = (text) => {
        this.setState({
            title: text
        })
    }

    newNote = () => {
        this.props.newNote(this.state.title)
        this.setState({ title: null, addingNote: false });
    }
}

export default withStyles(styles)(Sidebar)