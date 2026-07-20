import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from '@mui/material';
import { fetchPredictions } from '../store/slices/analyticsSlice';

const Analytics = () => {
  const dispatch = useDispatch();
  const { predictions, loading } = useSelector(state => state.analytics);

  useEffect(() => {
    dispatch(fetchPredictions());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Analytics & Insights
      </Typography>

      {loading && <LinearProgress />}

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#fff3e0' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Predictive Performance Score
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                82%
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Average prediction accuracy for at-risk students
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: '#e8f5e9' }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Learning Path Recommendations
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                142
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                Active personalized learning paths
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            At-Risk Student Predictions
          </Typography>
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                <TableRow>
                  <TableCell>Student</TableCell>
                  <TableCell>Risk Level</TableCell>
                  <TableCell>Predicted GPA</TableCell>
                  <TableCell>Recommended Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {predictions.map((student, index) => (
                  <TableRow key={index}>
                    <TableCell>{student.name}</TableCell>
                    <TableCell>
                      <Chip
                        label={student.riskLevel}
                        color={student.riskLevel === 'High' ? 'error' : 'warning'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{student.predictedGpa}</TableCell>
                    <TableCell>{student.action}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Analytics;
