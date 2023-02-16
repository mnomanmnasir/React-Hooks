// import LogoImage from '../images/th.jpg'


// class Home extends React.Component {
//     render() {
//         console.log("props==>", this.props)
//         return (
//             <h1>
//                 {/* <h2>{this.props.name}</h2>
//                 <h2>{this.props.price}</h2> */}
//                 <button onClick={()=>this.props.get_props("saylani")}>Send props</button> 
//             </h1>
//         )   
//     }
// }

// class Contactus extends React.Component {
//     render() {
//         return (
//             <h1>
//                 Contact Us Page
//                 <Logo />
//             </h1>
//         )
//     }
// }

// class Logo extends React.Component {


//     render() {
//         return (
//             <div>
//                 <img src={LogoImage} alt="" width="200" />
//             </div>
//         )
//     }
// }

// // export default Home;
// export {
//     Home,
//     Contactus,
// };
import React, { useState, useEffect } from 'react'
import '../App.css'
function Home(props) {
    // const [name, setName] = useState('Noman')
    // const [email, setEmail] = useState('nomanmnasir@gamil.com')

    // const [arr, setArr] = useState(["car"]);

    const [name, setName] = useState("Ghous")
    const [obj, setObj] = useState({
        name: 'Noman',
        email: 'noman@gmail.com'
    })
    const handleClick = () => {
        // setName("Ashfaq")
        // setEmail('ashfaq@gmail.com')
        // let old_arr = arr;
        // old_arr.push("bike","oil")
        // setArr([...arr, 'bike','truck'])
        setObj({
            // name:"Ashoo",
            // email:'asho@gmail.com'
            ...obj,
            school: "Saylani"
        })
        console.log(obj)
    }

    useEffect(() => {
        console.log("I will run on every render")
    })

    useEffect(() => {
        console.log("I will run only first render")
    }, [])


    useEffect(() => {
        console.log("i will run everytime when name update")
    }, [name])


    useEffect(() => {
        return () => {
            console.log("Unmount")
        }
    })
    return (
        <div className='App'>
            <h1>
                React Hooks
            </h1>

            {/* <ul>
                {arr.map((v, i) => {
                    return <li key={i}>{v}</li>

                })}
            </ul> */}
            {/* <h2>{obj.name}</h2> */}
            {/* <h2>{props.name}</h2>
         <h2>{props.email}</h2>
          */}
            {/* <h2>{obj.email}</h2>  */}
            {/* <button onClick={()=>setName("Ashfaq")}> Update Name</button>
            <button onClick={()=>setEmail("noman@gmail.com")}> Update Email</button>
          */}
            <h2>{name}</h2>
            {/* <button onClick={handleClick}>Update</button> */}
            <button onClick={() => setName('ahmed')}>Update</button>
        </div>
    )
}

export default Home;
