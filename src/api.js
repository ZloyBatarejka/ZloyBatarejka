// state = {
//     leagues: [],
//     loaded: false
// }

// async componentDidMount() {
//     this.getLeagueData();
//     this.getMatchData();
// }
// getMatchData = () => {

// }
// getLeagueData = async () => {
//     const data = await Axios.get("http://u0362146.plsk.regruhosting.ru/league").then(data => {
//         data.data.forEach(country => {
//             country.items.forEach(league => {
//                 this.setState({ leagues: [...this.state.leagues, league] })
//             })
//         })
//     })
//     const pepega = await Axios.get("http://u0362146.plsk.regruhosting.ru/match").then(data => {
//         let leagues = this.state.leagues;
//         leagues.forEach(item => {
//             item.child = [];
//         })

//         data.data.forEach(match => {
//             leagues.forEach(league => {
//                 if (match.league_id === league.id) {
//                     league.child.push(match);
//                 }
//             })
//         })
//         this.setState({ leagues: leagues, loaded: true })
//         setTimeout(() => {
//             console.log(this.state.leagues)
//         }, 1000)
//     })
// }










// import React, { useState, useEffect } from 'react';
// import Tabs from "../components/tabs";
// import Table from '../components/table';
// import Axios from "axios";
// import { Context } from "../context";
// function All() {
//     const [state, setState] = useState({ loaded: true })
//     const [leagues, setLeagues] = useState([]);
//     useEffect(() => {
//         const getLeagueData = async () => {
//             const array = [];
//             await Axios.get("http://u0362146.plsk.regruhosting.ru/league").then(data => {
//                 data.data.forEach(country => {
//                     country.items.forEach(league => {
//                         array.push(league)
//                     })
//                 })
//             })
//             setLeagues([...array]);
//             setState({ loaded: false })
//         }
//         getLeagueData()
//     }, []);

//     const pepega = await Axios.get("http://u0362146.plsk.regruhosting.ru/match").then(data => {
//         let NewLeagues = [];
//         NewLeagues.forEach(item => {
//             item.child = [];
//         })

//         data.data.forEach(match => {
//             NewLeagues.forEach(league => {
//                 if (match.league_id === league.id) {
//                     league.child.push(match);
//                 }
//             })
//         })
//         this.setState({ leagues: leagues, loaded: true })
//         setState({...state,loaded: false});
//         setLeagues({...leagues,})
//     })

//     return (
//         <>
//             {state.loaded
//                 ? (<p>Loading</p>)
//                 : (
//                     <Context.Provider value={leagues}>
//                         <div className="all">
//                             <Tabs />
//                             <Table />
//                         </div>
//                     </Context.Provider>
//                 )
//             }

//         </>
//     )
// }

// export default All;



// import React, { Component, useContext } from 'react';
// import LeagueComponent from "../leagueComponent";
// import { Context } from "../../context";

// const Today = () => {
//     const state = useContext(Context);
//     const leagues = [];
//     state.map(league => {
//         const t = (new Date()).getDate();
//         const today = ('0' + t).slice(-2);
//         if (league.child.length) {
//             league.child.forEach((match) => {
//                 const day = (match.time).slice(8, 10);
//                 if (day == today) {
//                     leagues.push(league);
//                 }
//             })
//         }
//     })
//     const b = leagues.map(item => {
//         return (<LeagueComponent key={item.id} props={item} />)
//     })
//     console.log(state)
//     return (
//         <div>
//             {b}
//         </div>
//     );
// }

// export default Today;








// import React, { Component, useContext } from 'react';
// import LeagueComponent from "../leagueComponent";
// import { Context } from "../../context";

// const Today = () => {
//     const state = useContext(Context);
//     const b = state.map(item => {
//         if (item.child.length) {
//             return (<LeagueComponent key={item.id} props={item} />)
//         }
//     })
//     return (
//         <div>
//             {b}
//         </div>
//     );
// }

// export default Today;
