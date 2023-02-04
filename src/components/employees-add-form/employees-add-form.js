import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        // Можно еще и сообщения добавлять, подсветку, атрибуты minlength и тд.
        if (this.state.name.length < 3 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit = {this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name="name"
                        value={name} 
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name="salary"
                        value={salary} 
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
// import { Component} from 'react'

// import './employees-add-form.css';

// class EmployeesAddForm extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             salary: ''
//         }
//     }
// // name это уникальное имя которое нужно по большей части на бэкенд и должно быть уникальным, на бэе отправ инфу
// // value свойство которое определяет информацию в инпуте
//     onValueChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value // записать свойство в объект
//         }) // только таким образом мы можем достучаться до объекта где происходит событие
//     }
//    render() {
//     const {name, salary} = this.state
//     return (
//         <div className="app-add-form">
//             <h3>Добавьте нового сотрудника</h3>
//             <form
//                 className="add-form d-flex">
//                 <input type="text"
//                     className="form-control new-post-label"
//                     placeholder="Как его зовут?" 
//                     name='name' // нейм нейм и нейм сэлари записали чтобы оно совпадало с нашим объектом
//                     value={name} // если мы хотим рендерить форму в ответ на ввод юзера то мы добавляем атрибут вэлью и добав значение стэйта
//                     onChange={this.onValueChange}/>
//                 <input type="number"
//                     className="form-control new-post-label"
//                     placeholder="З/П в $?"  onChange={this.onValueChange}
//                     name='salary'
//                     value={salary}/>
                
//                 <button type="submit"
//                         className="btn btn-outline-light">Добавить</button>
//             </form>
//         </div>
//     )
//    }
// }

// export default EmployeesAddForm;