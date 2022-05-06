import React,{useState} from 'react'
import PhoneModalConnect from './components/PhoneModalConnect';
import WalletItem from './components/WalletItem';
import './HomePhone.css'
import Products from './Products';

function HomePhone() {
    const [openModal, setOpenModel] = useState(false);
    const [walletId, setWalletId] = useState([]);

   
    const onPress = (e) => {
        setOpenModel(true);
        console.log(e);
      };
  return (
    <div className='homeP'>
        <div className='home__wrapperP'>
            <div className='home__textWrapperP'>
                <h1 className='home__headingP'>Wallets</h1>
                <div className='home__descriptionP'>
                Multiple iOS and Android wallets support
                    the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp
                    with your mobile wallet. Interaction between mobile apps and mobile browsers
                    are supported via mobile deep linking.
                    
                </div>
                
            </div>
            
        </div>
        <div className='home__sectionP'>
            <div className='home__sectionGridP'>
                {Products.map(item=>{
                    return(
                        <WalletItem  url={item.url} name={item.name}  onPress={()=> {
                            setOpenModel(true)
                            setWalletId(item.id)
                        }}/>

                    )
                })}
                
            
                
            </div>
            
        </div>

        {openModal === true && (
        <PhoneModalConnect
        onCancel={()=> {
            setOpenModel(false)
           
        }}
        
         
          setOpenModal={setOpenModel}
          walletId={walletId}
        />
      )}




    </div>
  )
}

export default HomePhone