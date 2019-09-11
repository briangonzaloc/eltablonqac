import React from 'react';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';



const content = {
    "blocks": 
        [
            {
                "key": "5jkeu",
                "text": "setsdfsefrsdfsdfsdsfdf+😴",
                "type": "header-two",
                "depth": 0,
                "inlineStyleRanges": [
                    {
                        "offset": 1,
                        "length": 23,
                        "style": "ITALIC"
                    }
                ],
                "entityRanges": [],
                "data": {}
            },
            {
                "key": "1uki8",
                "text": " ",
                "type": "atomic",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [
                    {
                        "offset": 0,
                        "length": 1,
                        "key": 0
                    }
                ],
                "data": {}
            },
            {
                "key": "896dr",
                "text": "",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [],
                "entityRanges": [],
                "data": {}
            },
            {
                "key": "32tmi",
                "text": "sdf",
                "type": "unordered-list-item",
                "depth": 0,
                "inlineStyleRanges": [
                    {
                        "offset": 0,
                        "length": 3,
                        "style": "ITALIC"
                    }
                ],
                "entityRanges": [],
                "data": {}
            }
        ],
        "entityMap": {
            "0": {
                "type": "IMAGE",
                    "mutability": "MUTABLE",
                        "data": {
                    "src": "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
                        "height": "auto",
                            "width": "auto",
                                "alt": "aaaa"
                }
            }
    }
}

class News extends React.Component{

    constructor(props) {
        super(props);
        // const datahtml = convertToRaw(content)
        // console.log(datahtml)
    }

    render(){
        return (
            <React.Fragment>
                News
            </React.Fragment>
        )
    }
}

export default News;