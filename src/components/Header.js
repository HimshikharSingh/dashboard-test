import React from "react";


function Header() {
  return (
    <div style={{ height: "60%", width: "60%" }}>
      
        <text style={{color: "#fe525c",fontWeight: 500, textAlign: "left"}}>Himshikhar</text><br></br>
        <text style={{color: "white",fontWeight: 400, fontSize: 10, textAlign: "left"}}>UI/UX Designer</text>
        <br/><br/>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div style={{alignContent:'flex-start'}}>
                    <text style={{color: "white",fontWeight: 500,fontSize: 12, textAlign: "left"}}>125</text><br/>
                    <text style={{color: "white",fontWeight: 400,fontSize: 9, textAlign: "left"}}>Projects</text>
                    </div>
                <div style={{alignContent:'flex-end'}}>
                    <text style={{color: "white",fontWeight: 500,fontSize: 12, textAlign: "left"}}>$127</text><br/>
                    <text style={{color: "white",fontWeight: 400,fontSize: 9, textAlign: "left"}}>Revenue</text>
            </div>
            
        </div>

    </div>
  );
}

export default Header;
