var React = require('react');
var DataGrid = require('react-datagrid');

/**
 * data is an array with 1000 items, like: [ { id: 0, index: 1, firstName:
 * 'John', city: 'London', 'email: jon@gmail.com'}, { id: 1, .... } ]
 */
var columns = [
    {name: 'index', title: '#', width: 50},
    {name: 'firstName'},
    {name: 'lastName'},
    {name: 'city'},
    {name: 'email'}
]

var data = [{index: "1", firstName: "Nikola", lastName: "Petrovic", city: "Kragujevac", email: "nikpetrovic@gmail.com"},
    {index: "2", firstName: "Djordje", lastName: "Ivanovic", city: "Beograd", email: "horhe@gmail.com"},
    {index: "3", firstName: "Goran", lastName: "Gjorgoski", city: "Skopje", email: "goran@gmail.com"}];


function rowStyle(data, props) {
    var style = {}
    style.fontSize = '0.8em'

    if (props.index % 4 == 0) {
        style.color = 'blue'
    }

    if (data.firstName == 'Djordje') {
        style.background = '#FFD3D3'
        style.fontWeight = 'bold'
    }

    return style
}

var ReactGrid = React.createClass({
    render: function () {
        return <DataGrid
            idProperty='id'
            dataSource={data}
            columns={columns}
            // if you don't want to show a column menu to show/hide columns, use
            withColumnMenu={false}
            rowStyle={rowStyle}
            />
    }
})

module.exports = ReactGrid;