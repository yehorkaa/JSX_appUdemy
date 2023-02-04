import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
constructor(props) {
    super(props)
    this.state = {
        term: ''
    }
}

// это и то что из эп джс это разные функции но с одинаков названиями
onUpdateSearch = (e) => {
const term = e.target.value;
this.setState({term}) // устанавливаем этот терм уникально
this.props.onUpdateSearch(term) 
}
 render(){
    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
    )
 }}

export default SearchPanel;