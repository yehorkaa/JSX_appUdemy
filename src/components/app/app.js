import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: 'all'
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  // Да, пока могут добавляться пустые пользователи. Мы это еще исправим
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };
  searchEmp = (items, term) => { //array of data and string
    if(term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.name.indexOf(term) > -1 // возвращ элементы где нашли кусочек той строки что есть в нэйм
    }) // то есть отобразяться только те у кого есть хотя бы одна буква ищ term
  } 

  onUpdateSearch = (term) => {
    this.setState({term})
  }

  filterPost = (items, filter) => { // filter -- string
    switch(filter) {
      case 'rise':
        return items.filter(item => item.rise);
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000)
      default:
        return items
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter}) // изменяем в нашем состоянии текущий фильтр
  }

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    // const visibleData = this.searchEmp(data, term) // возвращ отфлильтрованый массив по поиску
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem} /*тут мы в импортируемый эмплое лист добавляем массив с инфой*/
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
// // в этом файле мы СОБИРАЕМ все приложении с кубиков которые хранятся в components
// import { Component } from 'react';

// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeesList from '../employees-list/employees-list'; // получаем имполи лист
// import EmployeesAddForm from '../employees-add-form/employees-add-form';

// import './app.css';
// // в этом файле мы СОБИРАЕМ все приложении с кубиков которые хранятся в components
// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       data : [
//         {name: 'Yehor Y.' , salary: 800 , increase: false, id: 1},
//         {name: 'Vadim I.' , salary: 3000 ,increase: true, id: 2},
//         {name: 'Yaroslav P.' , salary: 5000,increase:false, id: 3 }
//       ]
//     }
//   }

//   deleteItem = (id) => {
//     this.setState(({data}) => { // вытаскиываем дата с зис стейт
//       const index = data.findIndex(elem => elem.id === id)
//      const before = data.slice(0,index)
//      const after = data.slice(index+ 1)
//      const newArr = [...before, ...after] // скопировали массив
//       return {
//         data: newArr
//       }
//     })
//   }

//  render() {
//   return (
//     <div className="app">
//         <AppInfo />

//         <div className="search-panel">
//             <SearchPanel/>
//             <AppFilter/>
//         </div>

//         <EmployeesList data={this.state.data}
//         onDelete={id => console.log(id)}/> {/*тут мы в импортируемый эмплое лист добавляем массив с инфой*/}
//         <EmployeesAddForm/>
//     </div>
//   );
//  }
// }

// export default App; // экспортируем ЭПП функцию
// function App() {
//   const data  = [
//     {name: 'Yehor Y.' , salary: 800 , increase: false, id: 1},
//     {name: 'Vadim I.' , salary: 3000 ,increase: true, id: 2},
//     {name: 'Yaroslav P.' , salary: 5000,increase:false, id: 3 }
//   ];
//   return (
//     <div className="app">
//         <AppInfo />

//         <div className="search-panel">
//             <SearchPanel/>
//             <AppFilter/>
//         </div>

//         <EmployeesList data={data} {/*тут мы в импортируемый эмплое лист добавляем массив с инфой*/}
//         onDelete={id => console.log(id)}/>
//         <EmployeesAddForm/>
//     </div>
//   );
// }

// export default App; // экспортируем ЭПП функцию
