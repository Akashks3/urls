import React, { useEffect, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register all required components
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = ({ urlStats }) => {
    const [data, setData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const labels = (urlStats || []).map(stat => stat.url);
        const clicksData = (urlStats || []).map(stat => stat.clicks);

        setData({
            labels,
            datasets: [
                {
                    label: 'Clicks (Bar Chart)',
                    data: clicksData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                    label: 'Clicks (Line Chart)',
                    data: clicksData,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false,
                },
            ],
        });
    }, [urlStats]);

    return (
        <div className="dashboard-container">
            <h2>Dashboard</h2>
            <div className="chart-container">
                <h3>Bar Chart</h3>
                <Bar data={data} options={{ responsive: true }} />
            </div>
            <div className="chart-container">
                <h3>Line Chart</h3>
                <Line data={data} options={{ responsive: true }} />
            </div>
        </div>
    );
};

// Prop validation
Dashboard.propTypes = {
    urlStats: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            clicks: PropTypes.number.isRequired,
        })
    ),
};

// Default props
Dashboard.defaultProps = {
    urlStats: [],
};

export default Dashboard;
