
import { Component } from "react";
import {v4} from 'uuid'
import ProductCard from '../ProductCard'
import './index.css'
import {ListContainer} from './styledComponent'

class Home extends Component{

state={
    searchItem:'',
    productList:[],
    isListView:true
}

onChangeSerachInput=(event)=>{
    this.setState({
        searchItem:event.target.value
    })
}


componentDidMount(){
    this.getProducts()
}

getProducts=async()=>{


const apiUrl=' https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093'

const options={
    method:'GET',
    headers:{
        Authorization:'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'
    }
}
const response=await fetch(apiUrl,options)
const data = await response.json()
console.log(data)
const updateData=data.data.map(eachItem=>({
    id: v4(),
    productBadge:eachItem.product_badge,
    productImage:eachItem.product_image,
    productTitle:eachItem.product_title,
    productVariants:eachItem.product_variants.map(eachSize=>({
        v1:eachSize.v1,
        v2:eachSize.v2,
        v3:eachSize.v3
    }))
   

    




}))
console.log(updateData)

this.setState({
    productList:updateData
})


}

onClickGridView=()=>{
    this.setState({
        isListView:false
    })
}

onClickListView=()=>{
    this.setState({
        isListView:true
    })
}


    render(){
        const{productList,isListView}= this.state
        const viewType=isListView ?'column':'row'
        return(
            <div className="app-container">
                <h1 className="title">PLP</h1>
                <div>
                    <input type='text'  onChange={this.onChangeSerachInput} className="input-container"/>
                    <button type="button" className="btn" onClick={this.onClickListView}> <img src='https://res.cloudinary.com/dvvldj42g/image/upload/v1705249628/list_1_yhgzcl.png' alt='list view' className="list-view-btn"/></button>
                    <button type="button" className="btn" onClick={this.onClickGridView}><img src='https://res.cloudinary.com/dvvldj42g/image/upload/v1705249627/menu_1_vnk1d2.png' alt='grid view'   className="grid-view-btn"/></button>
                </div>
                <ListContainer view={viewType}>
                    {productList.map(eachItem=>(<ProductCard key={eachItem.id}  productDetails={eachItem}/>))}
                </ListContainer>
            </div>
        )
    }
}
export default Home