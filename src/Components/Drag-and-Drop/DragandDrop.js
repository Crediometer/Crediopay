import { connect } from "react-redux";
import "./DragandDrop.css"
import { useState, useRef, useEffect } from "react";
import { verifyboard, verifyprofileimg } from "../../Redux/Verify/FileAction";
import LoadingModal from "../modal/LoadingModal";
const DragandDrop = ({
    verifyprofileimg,
    errormessage,
    loading,
    dataurl,
    board
}) => {
    const [files, setFiles] = useState(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false)
    const inputRef = useRef();
    const handleDragOver = (event) => {
        event.preventDefault();
    };
    useEffect(() => {
        // Update the dataurl whenever it changes
        board(dataurl);
    }, [dataurl, board]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        setFiles(event.target.files)
        let data ={file:event.target.files[0]}
        try{
            verifyprofileimg(data, ()=>{
                setSuccess(true)
                board(dataurl)
            },()=>{
                setError(true)
            })
        }catch(error){

        }
    }
    const handleDrop = (event) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
        let data ={file:event.dataTransfer.files[0]}
        try{
            verifyprofileimg(data, ()=>{
                setSuccess(true)
                board(dataurl)
            },()=>{
                setError(true)
            })
        }catch(error){

        }
    };
      if (success) return (
        <div className="uploads">
            <ul>
                {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
            </ul>
            <div className="actions">
                {/* <button className="cancle-select" onClick={() => board(null)}>Cancel</button> */}
            </div>
        </div>
      )
    return ( 
        <div 
            className="dropzone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            {error && (<p>{errormessage}</p>)}
            <p>Drag and Drop Files to Upload</p>
            <p>Or</p>   
            <input 
                type="file"
                multiple
                onChange={handleSubmit}
                hidden
                accept="application/pdf"
                // accept="image/png, image/jpeg"
                ref={inputRef}
                required
            />
            <button onClick={(e) => {inputRef.current.click(); e.preventDefault();}} className="file-select">Select Files</button>
            {loading && (<LoadingModal/>)}
        </div>
    );
}

const mapStoreToProps = (state) => {
    console.log(state)
    return {
        errormessage: state.verifyprofileimg.error,
        loading: state.verifyprofileimg.loading,
        dataurl:state.verifyprofileimg?.boarddata?.url,
    };
};
  
const mapDispatchToProps = (dispatch) => {
    return {
        verifyprofileimg: (nameState, history, errors) => {
            dispatch(verifyboard(nameState, history, errors));
        }
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(DragandDrop);