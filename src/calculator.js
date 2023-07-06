import React,{useState} from "react";

const Calculator = () =>{
    const [num1,setnum1] = useState('');
    const [num2,setnum2] = useState('');
    const [output,setoutput] = useState(0);

    const addition = ()=>{
        setoutput(Number(num1) + Number(num2));
    }

    const subtraction = () =>{
        setoutput(Number(num1) - Number(num2));
    }

    const multiplication = ()=>{
        setoutput(Number(num1) * Number(num2));
    }

    const division = ()=>{
        setoutput(Number(num1) / Number(num2));
    }

    return(
        <div>
            <h1>Calculator</h1>
            <input
            type="number"
            value={num1}
            onChange={(e) => setnum1(e.target.value)}/>
            <input
            type='number'
            value={num2}
            onChange={(e) => setnum2(e.target.value)}/>
            <br/>
            <button onClick={addition}>Addition</button>
            <button onClick={subtraction}>Subtraction</button>
            <button onClick={multiplication}>Multiplication</button>
            <button onClick={division}>Division</button>
            <h3>Output:{output}</h3>

        </div>
    )
}


export default Calculator
// import React,{useState} from "react";

// const Calculator = ()=>{
//     const [num1,setnum1] = useState('');
//     const [num2,setnum2] = useState('');
//     const [output,setoutput] = useState(0);

//     const addition = ()=>{
//         setoutput(Number(num1) + Number(num2));
//     }

//     const subtraction = ()=>{
//         setoutput(Number(num1) - Number(num2));
//     }

//     const multiplication = ()=>{
//         setoutput(Number(num1) * Number(num2));
//     }

//     const division = ()=>{
//         setoutput(Number(num1) / Number(num2));
//     }

//     return(
//         <div>
//             <h1>Calculator</h1>
//             <input
//             type="number"
//             value= {num1}
//             onChange={(e)=> setnum1(e.target.value)}/>
//             <input
//             type="number"
//             value = {num2}
//             onChange={(e) => setnum2(e.target.value)}/>
//             <br/>
//             <button onClick={addition}>Addition</button>
//             <button onClick={subtraction}>Subtraction</button>
//             <button onClick={multiplication}>Multiplication</button>
//             <button onClick={division}>Division</button>
//             <h3>output:{output}</h3>
//         </div>
        
//     )
// }



// export default Calculator