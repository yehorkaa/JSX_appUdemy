import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'}, // label то что будет внутри кнопки
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П больше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => { // деструктуризация помогла вытащить нэйм и лэйбл
        const active = props.filter === name; //filter это с эпп джс строка
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    // в нэйм тут находится состояние которое летит в фильтр и добавляет в строку отображая нужную инфу
                    // у нас создаются кнопки через мап и имена к их онкликам ставятся соотвественно. Дальше это все летит в апп 
                    // джс и обрабатывается показывая нужную инфу по кнопке
                    onClick={() => props.onFilterSelect(name)}> 
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;