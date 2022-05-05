import React,{useEffect, useState} from 'react'
import Products from '../Products'
import'./ModalConnect.css'
import ModalForm from './ModalForm'
function ModalConnect({setOpenModel, walletId, onCancel}) {
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
                <div className='modalConnect__main'>
                    <div className='modalConnect__content'>
                        {connecting === true ? <div className='modalConnect__connectionErrorWrapper'>
                            <div className=' modalConnect__connectionError'>
                                <div className=' modalConnect__connectionStatus'>
                                    <div className=''>
                                     Connecting..
                                    </div>
                                    
                                    
                                </div>

                                
                            </div>
                          

                            
                        </div> : <div className='modalConnect__connectionErrorWrapper'>
                            <div className=' modalConnect__connectionError'>
                                <div className=' modalConnect__connectionStatus'>
                                    <div className=''>
                                    Error Connecting..
                                    </div>
                                    <div onClick={()=> {
                            setFormModal(true)
                            setOpenModel(false)
                            
                        }} className='modalConnect__connectionBtn'>
                                        
                                      Connect Manually
                    
                                        
                                        
                                    </div>
                                    
                                </div>

                                
                            </div>
                          

                            
                        </div>}
                        
                        <div className='modalConnect__walletNamesWrapper'>
                                <div className='modalConnect__walletNames'>
                                    <div className='modalConnect__walletTitle'>
                                        {item.name}
                                        
                                    </div>
                                    <div className='modalConnect__description'>
                                        
                    This session is encrypted.
                  
                                        
                                    </div>
                                    
                                </div>
                                <div className='modalConnect__walletImageWrapper'>
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
        
            <div className='modalConfirm'>
            <div className='modalConfirm__mainContent'>
                <div className='modalConfirm__Wrapper'>
                    <div className='ss'>
                        Back
                        
                    </div>
                    <div onClick= {onCancel} className="modal__TabCancelBtn">
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
        {formModal === true && <ModalForm walletId={walletId} setFormModal={setFormModal} setOpenModel={setOpenModel}/>}

        </div>
  )
}

export default ModalConnect