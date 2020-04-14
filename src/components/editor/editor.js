import React, { Component } from 'react'
import ReactQuill from "react-quill"
import debounce from "../../helpers"
import BorderColorIcon from "@material-ui/icons/BorderColor"
import { withStyles } from "@material-ui/core/styles"
import styles from "./style"

class Editor extends Component {

    constructor(){
        super()
        this.state = {
            id: '',
            title: '',
            text: ''
        }
    }

    componentDidMount = () => {
        this.setState({
            id: this.props.selectedNote.id,
            title: this.props.selectedNote.title,
            text: this.props.selectedNote.body
        })
    }

    componentDidUpdate = () => {
        if(this.state.id !== this.props.selectedNote.id){
            this.setState({
                id: this.props.selectedNote.id,
                title: this.props.selectedNote.title,
                text: this.props.selectedNote.body
            })
        }
    }

    updateBody = async (value) => {
        await this.setState({
            text: value
        })
        this.update()
    }

    update = debounce( () => {
        this.props.noteUpdate(this.state.id, {
            title: this.state.title,
            body: this.state.text
        })
        console.log('debouncing ')
    }, 2000)

    render() {

        const { classes, note, selectedNote, selectedNoteIndex } = this.props

        return (
            <div className={classes.editorContainer}>
                <ReactQuill value={this.state.text} onChange={this.updateBody} ></ReactQuill>
            </div>
        )
    }
}

export default withStyles(styles)(Editor)