import React, {useState, useEffect} from 'react';
import {Bar, Line, Doughnut} from "react-chartjs-2";
import axios from 'axios';


const Contents = () => {

    const [confirmedData, setConfirmedData] = useState({
        labels: ['1월', '2월', '3월'],
        dataset: [
            {
                label: "국내 누적 확진자",
                backgroundColor: "salmon",
                fill: true,
                data: [10, 3, 3]
            }
        ]
    })
    useEffect(() => {
        const fetchEvents = async () => {
            const res = await axios.get('https://api.covid19api.com/total/dayone/country/kr');

        }
        fetchEvents();
    })

    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
                <div>
                    <Bar data={confirmedData} />
                </div>
            </div>
        </section>
    );
};

export default Contents;