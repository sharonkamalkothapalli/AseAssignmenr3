
// Biulding a functional component
// following PascalCasing
function Message(){
    // JSX:  Javascript XML
    const name = 'Sharon';
    if (name)
        return  <h1>Hello {name}</h1>;
    return  <h1>Hello World</h1>;
}

export default Message;