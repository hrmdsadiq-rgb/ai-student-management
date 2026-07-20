import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Paper,
} from '@mui/material';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fetchAnalytics } from '../store/slices/analyticsSlice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardData, loading } = useSelector(state => state.analytics);

  useEffect(() => {
    dispatch(fetchAnalytics());
  }, [dispatch]);

  const StatCard = ({ title, value, icon, color }) => (
    <Card sx={{ height: '100%', backgroundColor: color, color: 'white' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography color="inherit" variant="body2" sx={{ opacity: 0.8 }}>
              {title}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
              {value}
            </Typography>
          </Box>
          <Box sx={{ fontSize: '2.5rem' }}>{icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Students"
            value={dashboardData?.totalStudents || 0}
            icon="👥"
            color="#4CAF50"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Courses"
            value={dashboardData?.activeCourses || 0}
            icon="📚"
            color="#2196F3"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Avg. Performance"
            value={`${dashboardData?.avgPerformance || 0}%`}
            icon="📊"
            color="#FF9800"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="At-Risk Students"
            value={dashboardData?.atRiskStudents || 0}
            icon="⚠️"
            color="#f44336"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Performance Trend
            </Typography>
            {dashboardData?.performanceTrend && (
              <Line
                data={{
                  labels: dashboardData.performanceTrend.labels,
                  datasets: [{
                    label: 'Average Score',
                    data: dashboardData.performanceTrend.data,
                    borderColor: '#1976d2',
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    tension: 0.4,
                  }],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: true } },
                }}
              />
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Student Distribution
            </Typography>
            {dashboardData?.studentDistribution && (
              <Bar
                data={{
                  labels: dashboardData.studentDistribution.labels,
                  datasets: [{
                    label: 'Students',
                    data: dashboardData.studentDistribution.data,
                    backgroundColor: ['#4CAF50', '#2196F3', '#FF9800', '#f44336'],
                  }],
                }}
                options={{
                  responsive: true,
                  plugins: { legend: { display: true } },
                }}
              />
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
