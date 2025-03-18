import React from "react";
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {
    return(
        <>
        <section className="Dashboard">
                <div className="Dashboard__container">
                    <h1 className="Dashboard__title">Welcome to Your Dashboard</h1>
                    <div className="Dashboard__grid">
                        {/* Budget Tracker */}
                        <div className="Dashboard__card">
                            <h2 className="Dashboard__card-title">Budget Tracker</h2>
                            <p className="Dashboard__card-text">Track your monthly budget and spending.</p>
                            <div className="Dashboard__card-content">
                                <p><strong>Budget:</strong> $5000</p>
                                <p><strong>Spent:</strong> $3200</p>
                                <p><strong>Remaining:</strong> $1800</p>
                            </div>
                        </div>

                        {/* Daily Expenses */}
                        <div className="Dashboard__card">
                            <h2 className="Dashboard__card-title">Daily Expenses</h2>
                            <p className="Dashboard__card-text">View your daily spending habits.</p>
                            <ul className="Dashboard__list">
                                <li>Groceries: $50</li>
                                <li>Transport: $20</li>
                                <li>Dining: $30</li>
                            </ul>
                        </div>

                        {/* Saving Tips */}
                        <div className="Dashboard__card">
                            <h2 className="Dashboard__card-title">Saving Tips</h2>
                            <p className="Dashboard__card-text">Get personalized tips to save more.</p>
                            <ul className="Dashboard__list">
                                <li>Cook at home instead of dining out.</li>
                                <li>Set up automatic savings transfers.</li>
                                <li>Track unnecessary subscriptions.</li>
                            </ul>
                        </div>

                        {/* Task Tracker */}
                        <div className="Dashboard__card">
                            <h2 className="Dashboard__card-title">Task Tracker</h2>
                            <p className="Dashboard__card-text">Stay on top of your tasks.</p>
                            <ul className="Dashboard__list">
                                <li>Pay electricity bill</li>
                                <li>Review monthly budget</li>
                                <li>Plan weekend grocery shopping</li>
                            </ul>
                        </div>

                        {/* Analytics */}
                        <div className="Dashboard__card">
                            <h2 className="Dashboard__card-title">Analytics</h2>
                            <p className="Dashboard__card-text">Analyze your financial trends.</p>
                            <div className="Dashboard__analytics">
                                <p><strong>Income:</strong> $7000</p>
                                <p><strong>Expenses:</strong> $5000</p>
                                <p><strong>Savings:</strong> $2000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard;