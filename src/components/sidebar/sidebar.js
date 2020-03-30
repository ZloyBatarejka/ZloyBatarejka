import React, { useEffect, useState } from 'react';
import MyLeagues from "./myLeagues";
import Axios from 'axios';
import Countries from "./countries";
import Loading from "../loading";
const Sidebar = () => {
    const [leagues, setLeagues] = useState([]);
    const [state, setState] = useState({ loaded: false })
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const leagueArray = [];
            const countriesArray = [];
            await Axios.get("http://u0362146.plsk.regruhosting.ru/league").then(data => {
                data.data.forEach(country => {
                    leagueArray.push(country)
                })
            })
            leagueArray.forEach(league => {
                league.opened = false;
            })
            await Axios.get("http://u0362146.plsk.regruhosting.ru/country").then(data => {
                data.data.forEach((item) => {
                    countriesArray.push(item)
                })
            })
            setCountries([...countriesArray]);
            setLeagues([...leagueArray]);
            setState({ loaded: true })

        }
        getData();
    }, [])
    return (
        <>
            {state.loaded
                ? (<div className="sidebar">
                    <MyLeagues leagues={leagues} />
                    <Countries countries={countries} />
                </div>)
                : (<Loading />)
            }
        </>
    );
}

export default Sidebar;





        // const getLeagues = async () => {
        //     const array = [];
        //     await Axios.get(" http://u0362146.plsk.regruhosting.ru/country").then(data => {
        //         data.data.forEach(item => {
        //             array.push(item);
        //         })
        //     })
        //     setLeagues([...array]);
        // }
        // getLeagues();
        // console.log(leagues)