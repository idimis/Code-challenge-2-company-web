import React, { useEffect, useState } from 'react';

// Define a type for the analytics data
interface AnalyticsData {
    totalUsers: number;
    totalCompleted: number;
    // Add other fields if needed
}

async function fetchAnalyticsData(): Promise<AnalyticsData> {
    const response = await fetch('https://api.vercel.com/v1/analytics/your-endpoint');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function QuizComponent() {
    const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null); // Initialize as null
    const [name, setName] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchAnalyticsData();
                setAnalyticsData(data);
            } catch (error) {
                console.error('Error fetching analytics data:', error);
            }
        };
        getData();
    }, []);

    // Define the type of the event parameter
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle quiz start with name
        console.log('Starting quiz for:', name);
    };

    return (
        <div>
            <h1>Statistik Kuis</h1>
            {analyticsData ? (
                <div>
                    <p>Total Pengguna: {analyticsData.totalUsers}</p>
                    <p>Total Kuis Selesai: {analyticsData.totalCompleted}</p>
                    {/* Tambahkan statistik lain sesuai dengan data yang Anda ambil */}
                </div>
            ) : (
                <p>Loading statistik...</p>
            )}

            {/* Form untuk mengisi nama */}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Anda" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button type="submit">Mulai Kuis</button>
            </form>
        </div>
    );
}

export default QuizComponent;
