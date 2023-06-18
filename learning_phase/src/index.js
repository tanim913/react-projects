import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = () =>{
    return <section>
        <Person/>
        <Message/>
    </section>
};


const Person = () => <h2>Mehedi Goran</h2>;
const Message = () => {
    return <p>This is my message</p>;
};

// export default index

// function Greeting(){
//     return React.createElement(
//         'strong',
//         {},
//         React.createElement('p',{},'world should be peaceful!')
//     );
// }


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
