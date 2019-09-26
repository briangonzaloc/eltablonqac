import React from 'react';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import notesService from '../apis/NotesService';
import manager from '../apis/Manager';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class News extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            notes : undefined,
            loading : true,
            error : null
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        await manager.login({
            username: 'bcespedes',
            password: 'brian12345'
        })

        this.setState({loading: true, error: null})
        try{
            const notes = await notesService.list()
            this.setState({loading: false, notes: notes})
        }catch(err){
            this.setState({loading: false, error : err})
        }
    }

    getHtmlContent = () => {
        if( !this.state.notes ){
            return {__html : "<p>NO HAY NINGUNA NOTA MAN</p>"}
        }
        let contentHTML = "";
        this.state.notes.map( note =>{
            let postContent = note.content
            // postContent= this.state.notes[0].content;
            let edit = EditorState.createWithContent(convertFromRaw(JSON.parse(postContent)));
            console.log(postContent);
            console.log(edit);
            let editorHTML = draftToHtml(convertToRaw(edit.getCurrentContent()))
            contentHTML += editorHTML
        })

        // let first = this.state.notes[0]
        // let postContent = first.content
        // const edit = EditorState.createWithContent(convertFromRaw(JSON.parse(postContent)));
        // const editorHTML = draftToHtml(convertToRaw(edit.getCurrentContent()))
        // return { __html: editorHTML }
        return {__html : contentHTML }
    }

    render(){
        if( this.state.loading ){
            return <p>"LOADING"</p>
        }
        if( this.state.error ){
            return <p>ERROR: { this.state.error.message }</p>
        }
        return (
            <React.Fragment>
                <Link to="/newnote">
                    <Button variant="primary">Nueva nota</Button>
                </Link>
                {/* {JSON.stringify(this.state.notes)} */}
                <div dangerouslySetInnerHTML={this.getHtmlContent()} />
            </React.Fragment>
        )
    }
}

export default News;