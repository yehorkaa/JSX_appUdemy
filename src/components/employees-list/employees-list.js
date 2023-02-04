import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
// import EmployeesListItem from "../employees-list-item/employees-list-item";
// // тут мы принимаем эмплои лист айтем функцию
// import "./employees-list.css";

// const EmployeesList = ({data, onDelete}) => { //тут инфв с app.js

// const elements = data.map((item) => { // добавить тут индекс есть смысл только в том случае если мы знаем что порядок не изменится
//     const {id, ...itemProps} = item // айтем это объект, тут мы вытягиваем в начале айди, а остальное идет по остаточному принципу
//     return ( // айдишки нужны чтобы в пропс key (тут он как атрибут) каждому айтему дать нумерацию 
//         <EmployeesListItem key={id} 
//         {...itemProps}   // это все передаем как пропсы
//         onDelete={() => onDelete(id)} ></EmployeesListItem> // развернули item.name, item.salary
//     )
// })

// console.log(elements)
//   return (
//     <ul className="app-list list-group">
//      {elements}
//     </ul>
//   );
// };

// export default EmployeesList;
