import React, {useState} from 'react';
import axios from 'axios';
import FileUpload from 'components/Functions/FileUpload';
import FileUploadMobileView from 'components/Functions/FileUploadMobileView';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from 'views/index-sections/LoadingSpinner';

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
import DefaultFooter from "components/Footers/DefaultFooter.js";  

function FileUploaderPage() {
  // 페이지 이동을 위한 navigate 
  const navigate = useNavigate();

  // 모바일 뷰
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 592);

  // 로딩 스피너
  const [loading, setLoading] = useState(false);
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
      formData.append('nickname', nickname);
  
      try {
        setLoading(true);
        const response = await axios.post('http://3.34.182.50:5000/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
  
        sessionStorage.setItem('diagnosisData', JSON.stringify(response.data));
 
        console.log('이미지 업로드 성공');
        navigate(`/result`);
      } catch (error) {
        console.log(error.request);
        if (error.request) {
          alert('보다 명확한 이미지를 업로드해주세요');
        } else {
          console.log(typeof(error));
          alert('이미지 업로드 실패');
          console.log(error);
        }
      } finally {
        setLoading(false);
      }
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
    // 화면 크기 변경 감지 함수
    const handleResize = () => {setIsMobile(window.innerWidth <= 992);};
    // 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imgBox = {
    boxShadow: "0 5px 80px 3px #E1E1E1",
    borderRadius: "10px",
    width: "630px",
    height: "450px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    paddingTop: "10px",
  }

  const mobileImgBox = {
    boxShadow: "0 5px 80px 3px #E1E1E1",
    borderRadius: "10px",
    width: "630px",
    height: "auto",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    paddingTop: "10px",
  }

  const explainImg = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingBottom: "10px",
  }

  return (
    <>
      { isMobile ?
        <>
          <IndexNavbar />
          <div style={{width:"100%", height:"80px", backgroundColor:"#9ce8ee"}} />
          <div className="wrapper" >
            <div className="section">
              <Container className="mx-auto" >
                  <Col className="ml-auto mr-auto text-center" md="8">  
                    <h5 className="title" >
                      나의 두피 상태를 확인해보고 싶다면? <br /> 두피 사진을 올려주세요!
                    </h5>
                    <br />
      
                    <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <div style = {mobileImgBox} >
                        <h5 className="title" >
                          💡업로드 Tip💡<br />
                        </h5>
      
                        <div style={explainImg}>
                          <div>
                            <h6 style={{fontWeight:"700"}}>
                              🙆‍♀️ 이런 고화질 사진일수록 좋아요
                            </h6>
                            <img 
                              src='https://i.postimg.cc/KvtQ1zPg/scalp1.jpg' 
                              width="120px"
                              style={{ borderRadius: '10px', boxShadow: "0 2px 10px 3px #E1E1E1", }}
                            />
                          </div>
      
                          <div>
                            <h6 style={{fontWeight:"700"}}>
                              🙅‍♀️ 더 높은 화질로 사진 찍어주세요
                            </h6>
                            <img 
                              src='https://i.postimg.cc/SR68xnBS/scalp2.jpg' 
                              width="120px"
                              style={{ borderRadius: '10px', boxShadow: "0 2px 10px 3px #E1E1E1" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      {URLThumbnail ? (
                        <img src={URLThumbnail} alt="thumbnail" />
                      ) : (
                        ""
                      )}
                      <br /><br /><br />
                      {loading? <LoadingSpinner /> : ''}
                      <FileUploadMobileView 
                        label="두피 사진 올리기" 
                        onChange={onImageChange} 
                      />
                      <br /><br />
                    </div>
                  </Col>
                </Container>
              </div>
          </div>
          <br /><br /><br /><br /><br /><br />
          <DefaultFooter />
        </>
        :
        <>
          <IndexNavbar />
          <div style={{width:"100%", height:"80px", backgroundColor:"#9ce8ee"}} />
          <div className="wrapper">
            <div className="section">
              <Container className="mx-auto" >
                  <Col className="ml-auto mr-auto text-center" md="20">  
                    <h2 className="title" >
                      나의 두피 상태를 확인해보고 싶다면? <br /> 두피 사진을 올려주세요!
                    </h2>
                    <br />

                    <div style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                      <div style = {imgBox} >
                        <h3 className="title" >
                          💡업로드 Tip💡<br />
                        </h3>
                        <div style={explainImg}>
                          <div>
                            <h4 style={{fontWeight:"1000"}}>
                              🙆‍♀️ 이런 고화질 사진일수록 좋아요
                            </h4>
                            <img src='https://i.postimg.cc/KvtQ1zPg/scalp1.jpg' width={"210px"} height={"160px"} style={{ borderRadius: '10px', boxShadow: "0 2px 10px 3px #E1E1E1", }}/>
                          </div>

                          <div>
                            <h4 style={{fontWeight:"1000"}}>
                              🙅‍♀️ 더 높은 화질로 사진 찍어주세요
                            </h4>
                            <img src='https://i.postimg.cc/SR68xnBS/scalp2.jpg' width={"210px"} height={"160px"} style={{ borderRadius: '10px', boxShadow: "0 2px 10px 3px #E1E1E1" }}/>
                          </div>

                        </div>

                      </div>

                    </div>
                    {URLThumbnail ? (
                      <img src={URLThumbnail} alt="thumbnail" />
                    ) : (
                      ""
                    )}
                    <br /><br /><br />
                    {loading? <LoadingSpinner /> : ''}
                    <FileUpload label="두피 사진 올리기" onChange={onImageChange} />
                    <br /><br />
                  </Col>
                </Container>
              </div>
          </div>
          <DefaultFooter />
        </>
      }
    
    </>
  );
}

export default FileUploaderPage;

//            