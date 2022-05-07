import React,{useState} from 'react'
import PhoneModalConnect from './components/PhoneModalConnect';
import WalletItem from './components/WalletItem';
import './HomePhone.css'
import Products from './Products';

function HomePhone() {
    const [openModal, setOpenModel] = useState(false);
    const [walletId, setWalletId] = useState([]);

   
  
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

<div style={{width:'100%', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:'50px'}}>
          <div style={{display:'flex', flexDirection:'row', width:'100px', alignItems:"center", justifyContent:'center', padding:'10px'}}>
              <img style={{width:'20px', heigth:'20px'}} src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+RGlzY29yZCBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIwLjIyMiAwYzEuNDA2IDAgMi41NCAxLjEzNyAyLjYwNyAyLjQ3NVYyNGwtMi42NzctMi4yNzMtMS40Ny0xLjMzOC0xLjYwNC0xLjM5OC42NyAyLjIwNUgzLjcxYy0xLjQwMiAwLTIuNTQtMS4wNjUtMi41NC0yLjQ3NlYyLjQ4QzEuMTcgMS4xNDIgMi4zMS4wMDMgMy43MTUuMDAzaDE2LjVMMjAuMjIyIDB6bS02LjExOCA1LjY4M2gtLjAzbC0uMjAyLjJjMi4wNzMuNiAzLjA3NiAxLjUzNyAzLjA3NiAxLjUzNy0xLjMzNi0uNjY4LTIuNTQtMS4wMDItMy43NDQtMS4xMzctLjg3LS4xMzUtMS43NC0uMDY0LTIuNDc1IDBoLS4yYy0uNDcgMC0xLjQ3LjItMi44MS43MzUtLjQ2Ny4yMDMtLjczNS4zMzYtLjczNS4zMzZzMS4wMDItMS4wMDIgMy4yMS0xLjUzN2wtLjEzNS0uMTM1cy0xLjY3Mi0uMDY0LTMuNDc3IDEuMjdjMCAwLTEuODA1IDMuMTQ0LTEuODA1IDcuMDIgMCAwIDEgMS43NCAzLjc0MyAxLjgwNiAwIDAgLjQtLjUzMy44MDUtMS4wMDItMS41NC0uNDY4LTIuMTQtMS40MDQtMi4xNC0xLjQwNHMuMTM0LjA2Ni4zMzUuMmguMDZjLjAzIDAgLjA0NC4wMTUuMDYuMDN2LjAwNmMuMDE2LjAxNi4wMy4wMy4wNi4wMy4zMy4xMzYuNjYuMjcuOTMuNC40NjYuMjAyIDEuMDY1LjQwMyAxLjguNTM2LjkzLjEzNSAxLjk5Ni4yIDMuMjEgMCAuNi0uMTM1IDEuMi0uMjY3IDEuOC0uNTM1LjM5LS4yLjg3LS40IDEuMzk3LS43MzcgMCAwLS42LjkzNi0yLjIwNSAxLjQwNC4zMy40NjYuNzk1IDEgLjc5NSAxIDIuNzQ0LS4wNiAzLjgxLTEuOCAzLjg3LTEuNzI2IDAtMy44Ny0xLjgxNS03LjAyLTEuODE1LTcuMDItMS42MzUtMS4yMTQtMy4xNjUtMS4yNi0zLjQzNS0xLjI2bC4wNTYtLjAyem0uMTY4IDQuNDEzYy43MDMgMCAxLjI3LjYgMS4yNyAxLjMzNSAwIC43NC0uNTcgMS4zNC0xLjI3IDEuMzQtLjcgMC0xLjI3LS42LTEuMjctMS4zMzQuMDAyLS43NC41NzMtMS4zMzggMS4yNy0xLjMzOHptLTQuNTQzIDBjLjcgMCAxLjI2Ni42IDEuMjY2IDEuMzM1IDAgLjc0LS41NyAxLjM0LTEuMjcgMS4zNC0uNyAwLTEuMjctLjYtMS4yNy0xLjMzNCAwLS43NC41Ny0xLjMzOCAxLjI3LTEuMzM4eiIvPjwvZz48L3N2Zz4=" alt="discord" />
                <p style={{marginLeft:'10px'}} >Discord</p>
              
          </div>

          <div style={{display:'flex', flexDirection:'row', width:'100px', alignItems:"center", justifyContent:'center', padding:'10px'}}>
              <img style={{width:'20px', heigth:'20px'}} src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT48ZyBmaWxsPSJyZ2IoODgsIDExMiwgMTM1KSI+PHBhdGggZD0iTTIzLjk1NCA0LjU2OWMtLjg4NS4zODktMS44My42NTQtMi44MjUuNzc1IDEuMDE0LS42MTEgMS43OTQtMS41NzQgMi4xNjMtMi43MjMtLjk1MS41NTUtMi4wMDUuOTU5LTMuMTI3IDEuMTg0LS44OTYtLjk1OS0yLjE3My0xLjU1OS0zLjU5MS0xLjU1OS0yLjcxNyAwLTQuOTIgMi4yMDMtNC45MiA0LjkxNyAwIC4zOS4wNDUuNzY1LjEyNyAxLjEyNEM3LjY5MSA4LjA5NCA0LjA2NiA2LjEzIDEuNjQgMy4xNjFjLS40MjcuNzIyLS42NjYgMS41NjEtLjY2NiAyLjQ3NSAwIDEuNzEuODcgMy4yMTMgMi4xODggNC4wOTYtLjgwNy0uMDI2LTEuNTY2LS4yNDgtMi4yMjgtLjYxNnYuMDYxYzAgMi4zODUgMS42OTMgNC4zNzQgMy45NDYgNC44MjctLjQxMy4xMTEtLjg0OS4xNzEtMS4yOTYuMTcxLS4zMTQgMC0uNjE1LS4wMy0uOTE2LS4wODYuNjMxIDEuOTUzIDIuNDQ1IDMuMzc3IDQuNjA0IDMuNDE3LTEuNjggMS4zMTktMy44MDkgMi4xMDUtNi4xMDIgMi4xMDUtLjM5IDAtLjc3OS0uMDIzLTEuMTctLjA2NyAyLjE4OSAxLjM5NCA0Ljc2OCAyLjIwOSA3LjU1NyAyLjIwOSA5LjA1NCAwIDEzLjk5OS03LjQ5NiAxMy45OTktMTMuOTg2IDAtLjIwOSAwLS40Mi0uMDE1LS42My45NjEtLjY4OSAxLjgtMS41NiAyLjQ2LTIuNTQ4bC0uMDQ3LS4wMnoiLz48L2c+PC9zdmc+" alt="Twitter" />
                <p style={{marginLeft:'10px'}} >Twitter</p>
              
          </div>
          <div style={{display:'flex', flexDirection:'row', width:'100px', alignItems:"center", justifyContent:'center', padding:'10px'}}>
              <img style={{width:'20px', heigth:'20px'}} src="data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0SHViIGljb248L3RpdGxlPjxnIGZpbGw9InJnYig4OCwgMTEyLCAxMzUpIj48cGF0aCBkPSJNMTIgLjI5N2MtNi42MyAwLTEyIDUuMzczLTEyIDEyIDAgNS4zMDMgMy40MzggOS44IDguMjA1IDExLjM4NS42LjExMy44Mi0uMjU4LjgyLS41NzcgMC0uMjg1LS4wMS0xLjA0LS4wMTUtMi4wNC0zLjMzOC43MjQtNC4wNDItMS42MS00LjA0Mi0xLjYxQzQuNDIyIDE4LjA3IDMuNjMzIDE3LjcgMy42MzMgMTcuN2MtMS4wODctLjc0NC4wODQtLjcyOS4wODQtLjcyOSAxLjIwNS4wODQgMS44MzggMS4yMzYgMS44MzggMS4yMzYgMS4wNyAxLjgzNSAyLjgwOSAxLjMwNSAzLjQ5NS45OTguMTA4LS43NzYuNDE3LTEuMzA1Ljc2LTEuNjA1LTIuNjY1LS4zLTUuNDY2LTEuMzMyLTUuNDY2LTUuOTMgMC0xLjMxLjQ2NS0yLjM4IDEuMjM1LTMuMjItLjEzNS0uMzAzLS41NC0xLjUyMy4xMDUtMy4xNzYgMCAwIDEuMDA1LS4zMjIgMy4zIDEuMjMuOTYtLjI2NyAxLjk4LS4zOTkgMy0uNDA1IDEuMDIuMDA2IDIuMDQuMTM4IDMgLjQwNSAyLjI4LTEuNTUyIDMuMjg1LTEuMjMgMy4yODUtMS4yMy42NDUgMS42NTMuMjQgMi44NzMuMTIgMy4xNzYuNzY1Ljg0IDEuMjMgMS45MSAxLjIzIDMuMjIgMCA0LjYxLTIuODA1IDUuNjI1LTUuNDc1IDUuOTIuNDIuMzYuODEgMS4wOTYuODEgMi4yMiAwIDEuNjA2LS4wMTUgMi44OTYtLjAxNSAzLjI4NiAwIC4zMTUuMjEuNjkuODI1LjU3QzIwLjU2NSAyMi4wOTIgMjQgMTcuNTkyIDI0IDEyLjI5N2MwLTYuNjI3LTUuMzczLTEyLTEyLTEyIi8+PC9nPjwvc3ZnPg==" alt="Github" />
                <p style={{marginLeft:'10px'}} >Github</p>
              
          </div>
        
      </div>




    </div>
  )
}

export default HomePhone