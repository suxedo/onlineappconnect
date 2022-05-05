import React from 'react'

import "./WalletItem.css";

function WalletItem({name, url, onPress}) {
  return (
    <div className='walletitem' onClick={onPress}>
        <div className='walletitem__wrapper'>
            <img className='walletitem__image' src={url} alt='sss'/>
            
        </div>
        <div className='walletitem__name'>
        {name}
        </div>



    </div>
  )
}

export default WalletItem