
import React from 'react'
import './index.css'

const ProductCard = (props) => {
    const {productDetails}=props
    const {productImage,productBadge,productTitle,productVariants}= productDetails
    const v1=productVariants[0].v1
    const v2=productVariants[1].v2
    const v3 = productVariants[2].v3
  return (
    <li className='list-item-container'>
    <div className='left-container'>
      <div className='badge-bg'>
      <h1  className='badge-text'>{productBadge}</h1>
      </div>
      <img src={productImage} alt={productTitle} />
    </div>
    
    <div className='item-container'>
        
        
            <h1 className='product-title'>{productTitle}</h1>
            <p className='item-text'>{v1}</p>
            <p className='item-text'>{v2}</p>
            <p className='item-text'>{v3}</p>
        
    </div>
    </li>
  )
}

export default ProductCard