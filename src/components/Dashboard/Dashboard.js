import React from 'react';
import { LineChart, Line,XAxis,YAxis,Tooltip,CartesianGrid } from 'recharts';

const Dashboard = () => {
    // const data = [
    //     { name: 'Page A', uv: 4090, pv: 72400, amt: 2400 },
    //     { name: 'Page B', uv: 400, pv: 2400, amt: 12400 },
    //     { name: 'Page C', uv: 5400, pv: 400, amt: 2400 },
    // ];
      const data=[
            {
                "month": "Mar",
                "investment": 100000,
                "sell": 241,
                "revenue": 10401
            },
            {
                "month": "Apr",
                "investment": 200000,
                "sell": 423,
                "revenue": 24500
            },
            {
                "month": "May",
                "investment": 500000,
                "sell": 726,
                "revenue": 67010
            },
            {
                "month": "Jun",
                "investment": 500000,
                "sell": 529,
                "revenue": 40405
            },
            {
                "month": "Jul",
                "investment": 600000,
                "sell": 601,
                "revenue": 50900
            },
            {
                "month": "Aug",
                "investment": 700000,
                "sell": 670,
                "revenue": 61000
            }
        ]

    return (
        <div>
            <h4>recharts:ONE</h4>
            <LineChart width={1000} height={500} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment" ></YAxis>
                <Tooltip />
            </LineChart>
            <br /><br />
            <h2>Recharts TWO</h2>
            <LineChart width={1000} height={500} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month"></XAxis>
                <YAxis dataKey="investment" ></YAxis>
                <Tooltip />
            </LineChart>

        </div>
    );
};

export default Dashboard;
