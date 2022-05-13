import React from 'react'
import "./Radio.css"

const Radio = () => {
    return (
        <div className='radio-main'>
            <div className='radio-body size'>
                <input type="radio" value="SEO" name="btns"  className='item'/>
                <label htmlFor="SEO" >SEO</label> 
                <input type="radio" value="Woocommerce " name="btns" className='item'/> 
                <label htmlFor="Woocommerce" >Woocommerce</label> 
                <input type="radio" value="Payment " name="btns" className='item'/> 
                <label htmlFor="Payment Gateway">Payment Gateway</label> 
                <input type="radio" value="Gallery" name="btns" className='item'/>
                <label htmlFor="Gallery" >Gallery</label>  
            </div>
            <div className='radio-body' >
                <input type="radio" value="Modal " name="btns" className='item'/> Modal Windows
                <input type="radio" value="Countdown " name="btns" className='item'/> Countdown 
                <input type="radio" value="Calculator" name="btns"className='item' /> Calculator 
                <input type="radio" value="Side" name="btns" className='item'/> Side Menu
            </div>
            <div className='radio-body'>
                <input type="radio" value="Singup " name="btns" className='item' />Singup 
                <input type="radio" value="Locker" name="btns" className='item'/> Social Locker
                <input type="radio" value="Question" name="btns" className='item'/> Question Answer
                <input type="radio" value="Forum" name="btns" className='item'/> Forum
            </div>



        </div>
    )
}

export default Radio