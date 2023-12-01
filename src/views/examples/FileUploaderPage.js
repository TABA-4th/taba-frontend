import React, {useState} from 'react';
import axios from 'axios';
import FileUpload from 'components/Functions/FileUpload';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";  

function FileUploaderPage() {

  const [URLThumbnail, setURLThumbnail] = useState();

  const createImageURL = (fileBlob) => {  // createObjectURL 방식
    if (URLThumbnail) URL.revokeObjectURL(URLThumbnail);
    
    const url = URL.createObjectURL(fileBlob);
    
    setURLThumbnail(url);
  };
    
  const onImageChange = async (e) => {
    const { files } = e.target;
    
    if (!files || !files[0]) return;
    
    const uploadImage = files[0];
    let nickname = sessionStorage.getItem('nickname');


    createImageURL(uploadImage);

    if (uploadImage) {
      let formData = new FormData();
      formData.append('file', uploadImage);
      formData.append('nickname', 'yourNickname');

      axios({
        method:'post',
        url: 'http://3.34.182.50:5000/image',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(function(response){
        // 업로드 성공 시 실행할 코드
        console.log('이미지 업로드 성공');
      })
      .catch(function(error){
        // 업로드 실패 시 실행할 코드
        console.error('이미지 업로드 실패', error);
      });
    } else {
      console.error('이미지를 선택해주세요.');
    }

  };
  
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  

  return (
    <>
    <ExamplesNavbar />
    <div style={{width:"100%", height:"75px", backgroundColor:"#40CBEA"}} />
    <div className="wrapper">
      
      <div className="section">
        <Container className="mx-auto" >
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <h1 className="title" style={{textAlign:"left"}}>나의 두피 상태를 확인해보고 싶다면? <br /> 두피 사진을 올려주세요!</h1><br />
              {URLThumbnail ? (
                <img src={URLThumbnail} alt="thumbnail" />
              ) : (
                ""
              )}
              <br /><br /><br />
              <FileUpload label="두피 사진 올리기" onChange={onImageChange} />
            </Col>
          </Row>
        </Container>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <DefaultFooter />
    </div>
    </>
  );
}

export default FileUploaderPage;
