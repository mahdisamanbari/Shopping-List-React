import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
    {itemName:"item1" , quantity:1 , isSelected:false},
    {itemName:"item2" , quantity:2 , isSelected:true},
    {itemName:"item3" , quantity:3 , isSelected:false},
  ]);
  const [inputValue,setInputValue]=useState('')
  const [totalCount,setTotalCount]=useState(0)
 
  const inputIconHandler = ()=>{
   const newItem = {itemName:inputValue,quantity:1,isSelected:false}
   const newItems =[...items,newItem]
   setItems(newItems)
   setInputValue('')
  }
  const handleDecrease =(index)=>{
    const newItems =[...items];
    newItems[index].quantity--;
    setItems(newItems)
    calculateTotal()
  }
  const handleIncrease =(index)=>{
    const newItems =[...items];
    newItems[index].quantity++;
    setItems(newItems);
    calculateTotal()
  }
  const toggleCompleted=(index)=>{
    const newItems =[...items];
    items[index].isSelected = !items[index].isSelected;
    setItems(newItems)

  }
  const calculateTotal = ()=>{
    const totalItemsCount = items.reduce((total, item)=>{
      return total + item.quantity;
    },0);
    setTotalCount(totalItemsCount);
  }

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event)=>setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon onClick={()=>inputIconHandler()} icon={faPlus} />
				</div>
				<div className='item-list'>
					
            {items.map((item,index)=>{
              return(
              <div className='item-container'>
                <div onClick={()=>toggleCompleted(index)} className='item-name'>
							{item.isSelected ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.itemName}</span>
								</>
							)}
						    </div>
						    <div className='quantity'>
							<button>
								<FontAwesomeIcon onClick={()=>handleDecrease(index)} icon={faChevronLeft} />
							</button>
							<span>{item.quantity}</span>
							<button>
								<FontAwesomeIcon onClick={()=>handleIncrease(index)} icon={faChevronRight} />
							</button>
						    </div>
              </div>
            )}
            )}
						
					
				</div>
				<div className='total'>Total:{totalCount}</div>
			</div>
		</div>
	);
};

export default App;