const container = React.createElement('div', {id: 'parent'}, React.createElement('div', { id:'child'}, "Parent Child Div"))
console.log(container);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);