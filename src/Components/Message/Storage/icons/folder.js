import React, { Component } from 'react';


class Folder extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div class="folder-container">
            <img class="folder-icon" src="icons/folder.svg"></img>
            <span class="folder-name">{this.props.folder_name}</span>
        </div>
        );
    }
}

export default Folder;