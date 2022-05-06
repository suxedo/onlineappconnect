import React,{useEffect, useState} from 'react'
import Products from '../Products'
import'./PhoneModalConnect.css'
import ModalForm from './ModalForm'
import PhoneModalForm from './PhoneModalForm'
function PhoneModalConnect({setOpenModel, walletId, onCancel}) {
    const [connecting, setConnecting] = useState(true)
    const [formModal,setFormModal ] = useState(false)
    console.log(walletId);

    useEffect(() => {
        setTimeout(() => {
            setConnecting(false)
            
        }, 6000);

     
    }, [])
    

    function getCategoryProducts() {
        let productList = Products.filter(
          (a) => a.id === walletId
        );
        if (productList.length > 0) {
          return productList.map((item) => {
            return (
                <div className='modalConnect__mainP'>
                    <div className='modalConnect__contentP'>
                        {connecting === true ? <div className='modalConnect__connectionErrorWrapperP'>
                            <div className=' modalConnect__connectionErrorP'>
                                <div className=' modalConnect__connectionStatusP'>
                                    <div className=''>
                                     Connecting..
                                    </div>
                                    
                                    
                                </div>

                                
                            </div>
                          

                            
                        </div> : <div className='modalConnect__connectionErrorWrapperP'>
                            <div className=' modalConnect__connectionErrorP'>
                                <div className=' modalConnect__connectionStatusP'>
                                    <div className=''>
                                    Error Connecting..
                                    </div>
                                    <div onClick={()=> {
                            setFormModal(true)
                            setOpenModel(false)
                            
                        }} className='modalConnect__connectionBtnP'>
                                        
                                      Connect Manually
                    
                                        
                                        
                                    </div>
                                    
                                </div>

                                
                            </div>
                          

                            
                        </div>}
                        
                        <div className='modalConnect__walletNamesWrapperP'>
                                <div className='modalConnect__walletNamesP'>
                                    <div className='modalConnect__walletTitleP'>
                                        {item.name}
                                        
                                    </div>
                                    <div className='modalConnect__descriptionP'>
                                        
                    This session is encrypted.
                  
                                        
                                    </div>
                                    
                                </div>
                                <div className='modalConnect__walletImageWrapperP'>
                                    <img src={item.url} alt={item.name} style={{width:'24px', height:'24px'}}/>
                                    
                                </div>

                                
                            </div>
                        
                    </div>
                    
                </div>
              
            );
          });
        }
      }
    
  return (
    <div className='main'>
        
            <div className='modalConfirmP'>
            <div className='modalConfirm__mainContentP'>
                <div className='modalConfirm__WrapperP'>
                    <div className='ssP'>
                        Back
                        
                    </div>
                    <div onClick= {onCancel} className="modal__TabCancelBtnP">
                    <svg
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                      role="button"
                      style={{ height: "14px", width: "14px" }}
                    >
                      <g
                        stroke="#192a32"
                        stroke-width="1.5"
                        fill="none"
                        fill-rule="evenodd"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M1 1l8 8M9 1L1 9"></path>
                      </g>
                    </svg>
                  </div>
                    <div>
                    {getCategoryProducts()}
                        
                    </div>
                  
                    
                  
                   
                    
               
                    
                    
                    
                   
                    
                </div>
                
            </div>
            
        </div>
        {formModal === true && <PhoneModalForm walletId={walletId} setFormModal={setFormModal} setOpenModel={setOpenModel}/>}

        </div>
  )
}

export default PhoneModalConnect