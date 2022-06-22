import React from "react";

function AboutUs(props) {
  //   const [mystyle,setMystyle]=useState({
  //       color:'black',
  //       backgroundColor:'white',
  //       border:'2px solid black'
  //   });
  //   const [cbtn,setBtn]=useState("Enable Dark Mode");
    
  //  function clickonMode()
  //   {
       
  //       if(props.mode==='light')
  //       {
  //           setMystyle({
  //               color:'white',
  //               backgroundColor:'black',
  //               border:'2px solid white'
  //           })
  //           setBtn("Enable Light Mode");
  //       }
  //       else if(props.mode=='dark'){
  //           setMystyle({
  //               color:'black',
  //               backgroundColor:'white',
  //               border:'2px solid black'
  //           })
  //           setBtn("Enable Dark Mode");
  //       }
  //   }
  return (
    <>
      <div className="container" style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}>
          <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white',border:props.mode==='dark'?'2px solid white':'2px solid black'}}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white',border:props.mode==='dark'?'2px solid white':'2px solid black'}}
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white',border:props.mode==='dark'?'2px solid white':'2px solid black'}}
            >
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white',border:props.mode==='dark'?'2px solid white':'2px solid black'}}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'black':'white',border:props.mode==='dark'?'2px solid white':'2px solid black'}}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={clickonMode} type="button" className="btn btn-primary my-3">{cbtn}</button> */}
      </div>
    </>
  );
}
export default AboutUs;
