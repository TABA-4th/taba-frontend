import React, {useRef} from 'react';

const FileUpload = ({ label, onChange }) => {
    const ref = useRef(null);
  
    const onClick = () => {
      ref.current?.click();
    };

    const btnStyle = {
      background:"#2ca8ff",
      border:"1px solid #2ca8ff",
      width:"400px",
      height:"80px",
      color: "white",
      fontWeight:1000,
      fontSize:"30px",
    }

    
    

  return (
    <div>
      <button 
        className="btn-icon btn-round" 
        href="#pablo"
        onClick={onClick}
        style={btnStyle} 
      >
      {label}
      <input
        hidden
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="image-input"
        onChange={onChange}
        ref={ref}
      />
      </button>
    </div>
  );
}

export default FileUpload;
