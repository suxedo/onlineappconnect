import React,{useState} from 'react'
import ModalConnect from './components/ModalConnect';
import WalletItem from './components/WalletItem'
import './Home.css'
import Products from './Products'

function Home() {

    const [openModal, setOpenModel] = useState(false);
    const [walletId, setWalletId] = useState([]);

   
    const onPress = (e) => {
        setOpenModel(true);
        console.log(e);
      };
  return (
    <div className='home'>
        <div className='home__wrapper'>
            <div className='home__textWrapper'>
                <h1 className='home__heading'>Wallets</h1>
                <div className='home__description'>
                Multiple iOS and Android wallets support
                    the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp
                    with your mobile wallet. Interaction between mobile apps and mobile browsers
                    are supported via mobile deep linking.
                    
                </div>
                
            </div>
            
        </div>
        <div className='home__section'>
            <div className='home__sectionGrid'>
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
        <ModalConnect
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

export default Home