import React, { Component } from 'react';

class UploadFiles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectFileName: "",
            selectedFileType:"SSIM"
        };
    }


    onChangeFile(event) {
        event.stopPropagation();
        event.preventDefault();
        var file = event.target.files[0];
        console.log(file);
        this.setState({ selectFileName:file.name }); 
    }

    chnageFileType(event){
        this.setState({selectedFileType:event.target.value})
    }
    render() {
        return (
            <div>
                <h2 className = "UploadFilesHeading">Upload Input Files</h2>
                <p >File Type</p>
                <input id="myInput"
                        type="file"
                        // accept= {this.state.selectFileName ==="SSIM" ? ".zip,.rar" : "csv"}
                        accept= "csv"
                        ref={(ref) => this.upload = ref}
                        style={{ display: 'none' }}
                        onChange={this.onChangeFile.bind(this)}
                    />
                <div>
                    <select className='dropdown'>
                        <option value="SSIM">SSIM File</option>
                        <option value="ClassMapping">Class Mapping File</option>
                        onChange = this.chnageFileType
                    </select>

               

                   
                    <button
                    className = "browse"
                        label="Open File"
                        primary={false}
                        onClick={() => { this.upload.click() }}>
                        Browse
                    </button>
                    <span>{this.state.selectFileName}</span>
                </div>


                <button className="upload">
                    Upload
                </button>
            </div>


        );
    }
}

export default UploadFiles;

