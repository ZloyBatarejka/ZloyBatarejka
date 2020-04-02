import React, { useState, useEffect } from 'react';
import Tabs from "../components/tabs";
import Table from '../components/table';
import Axios from "axios";
import { Context } from "../context";
import Loading from "../components/loading";
function All() {
    const [state, setState] = useState({ loaded: true })
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const getLeagueData = async () => {
            const array = [];
            await Axios.get("http://u0362146.plsk.regruhosting.ru/league").then(data => {
                data.data.forEach(country => {
                    country.items.forEach(league => {
                        array.push(league)
                    })
                })
            })
            await Axios.get("http://u0362146.plsk.regruhosting.ru/match").then(data => {
                array.forEach(item => {
                    item.child = [];
                })
                data.data.forEach(match => {
                    array.forEach(league => {
                        if (match.league_id === league.id) {
                            league.child.push(match);
                        }
                    })
                })

            })
            setLeagues([...array]);
            setState({ loaded: false })

        }
        getLeagueData()
    }, []);



    return (
        <>
            {state.loaded
                ? (<>
                    <Loading />
                    <p>Firebase использует https протокол.Кастомная API на http протоколе. API на https протоколе только по платной подписке. Однако, все корректно работает с локального сервера.</p>
                </>
                )
                : (
                    <Context.Provider value={leagues}>
                        <div className="all">
                            <Tabs />
                            <Table />
                        </div>
                    </Context.Provider>
                )
            }

        </>
    )
}

export default All;
