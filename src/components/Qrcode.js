import React,{useEffect, useState} from 'react'
import QRCode from 'qrcode'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Qrcode({text, ran}) {
    const [src, setSrc] = useState('')
    useEffect(() => {
        QRCode.toDataURL(ran).then((data)=>{
            setSrc(data)

        })
    
    }, [ran])
    
  return (
    <div style={{ alignItems:'center', display:'flex', flexDirection:'column'}}>
        <img style={{width:'230px', height:'230px'}} src={src} alt='qrcode'/>
        <h1>{text}</h1>
        <h3>Successfull Sumbitted</h3>
        <img style={{width:'200px', height:'200px'}} src='https://media.istockphoto.com/vectors/green-checkmark-vector-illustration-vector-id1133442802?k=20&m=1133442802&s=612x612&w=0&h=N3UvaUREpqMYVpOV7kUrQzgpVaCgddEi-LESGeAl_FI=' alt='mark'/>

        <p>contact your administrator with your unique id</p>
        
 
    </div>
  )
}

export default Qrcode