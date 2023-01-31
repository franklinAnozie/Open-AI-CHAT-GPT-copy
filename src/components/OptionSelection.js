import React from "react"

export const OptionSelection = ({arrayItems, selectOption}) => {
    
    return (
        <>
            <h1 className="heading">REACT AI APP</h1>
            <div className="grid-main">
                {arrayItems.map((item)=>{
                    return (
                        <div key={item.name}
                            className="grid-child"
                            onClick={()=>selectOption(item.option)}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}