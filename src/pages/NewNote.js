import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Button } from 'react-bootstrap';
import draftToHtml from 'draftjs-to-html';

import manager from '../apis/Manager';
import usersService from '../apis/UsersService';
import notesService from '../apis/NotesService';

const initialContent = { 
    "entityMap": {}, 
    "blocks": 
        [
            { "key": "637gr", "text": "Initialized from content state.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }
        ] 
    };

class NewNote extends React.Component{
    constructor(props) {
        super(props);
        // const contentState = convertFromRaw(initialContent);
        const contentState = EditorState.createWithContent(convertFromRaw(initialContent))
        // const contentState = EditorState.createEmpty();
        this.state = {
            editorState : contentState,
        }
        console.log('constructor', contentState);
    }

    // onContentStateChange = (contentState) => {
    //     console.log('change', contentState)
    //     this.setState({
    //         content : contentState,
    //     });
        
    // };

    onEditorStateChange = (editorState) => {
        // console.log(editorState)
        // const contentState = editorState.getCurrentContent();
        // console.log('content state ', convertToRaw(contentState));
        this.setState({
            editorState
        })
    }

    

    uploadImageCallBack = (file) => {
        return new Promise(
            (resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open('POST', 'https://api.imgur.com/3/image');
                xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
                const data = new FormData();
                data.append('image', file);
                xhr.send(data);
                xhr.addEventListener('load', () => {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                });
                xhr.addEventListener('error', () => {
                    const error = JSON.parse(xhr.responseText);
                    reject(error);
                });
            }
        );
    }

    saveContent = async () => {
        await manager.login({
            username : 'xxxx',
            password: 'xxxx'
        })

        let currentContent = this.state.editorState.getCurrentContent();
        if ( !currentContent.hasText() ){
            console.log('ESTA VACIO PAPA!!! QUE QUERE GUARDAAAAA !!!!  ')
            return;
        }

        // const users = await usersService.list()
        // console.log('users => ', users);
        let noteContent = convertToRaw(currentContent)
        noteContent = JSON.stringify(noteContent)
        console.log('SAVE => ', noteContent);
        await notesService.create({ content: noteContent}) 
        

        
        // const editor = EditorState.createWithContent(convertFromRaw(JSON.parse(postContent)));
        // console.log('editor', editor)  
    }

    getHtmlContent =() =>{
        let postContent = convertToRaw(this.state.editorState.getCurrentContent())
        postContent = JSON.stringify(postContent)
        const edit = EditorState.createWithContent(convertFromRaw(JSON.parse(postContent)));
        const editorHTML = draftToHtml(convertToRaw(edit.getCurrentContent()))
        return { __html: editorHTML }

        // const auxContent = this.state.content
        // let raw = convertToRaw(this.state.content)
        // const editor = EditorState.createWithContent(convertFromRaw(initialContent))
        // debugger
        // const editor = EditorState.createWithContent(convertFromRaw(auxContent))
        // const editorHTML = draftToHtml(convertToRaw(editor.getCurrentContent()))
        // console.log('getHtmlContent', auxContent)  
        // return { __html: editorHTML }
    }

    render() {
        const editorState = this.state.editorState;

        return (
            <React.Fragment>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    // onContentStateChange={this.onContentStateChange}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        inline: { inDropdown: true },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        link: { inDropdown: true },
                        history: { inDropdown: true },
                        image: { uploadCallback: this.uploadImageCallBack, alt: { present: true, mandatory: true } },
                    }}
                />
                {/* <textarea
                    disabled
                    value={JSON.stringify(contentState, null, 4)}
                /> */}
                <Button variant="primary" onClick={this.saveContent}>Guardar</Button>
                <div dangerouslySetInnerHTML={this.getHtmlContent()}/>
            </React.Fragment>
        );
    }
}

export default NewNote;