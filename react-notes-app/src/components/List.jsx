import React from "react";

const List = (props) => {
    const category = props.cetagory;
    const itemList = props.items;
    const listItems = itemList.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name} &nbsp; {fruit.calories}
        </li>
    ));
    console.log(listItems);
    return (
        <>
            <h3>{category}</h3>
            <ol>{listItems}</ol>;
        </>
    );
};
export default List;
