import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Assessments = () => {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: 'Mathematics Mid-Term',
      course: 'Mathematics 101',
      dueDate: '2024-08-15',
      status: 'pending',
      autoGraded: true,
    },
    {
      id: 2,
      title: 'Physics Lab Report',
      course: 'Physics 201',
      dueDate: '2024-08-10',
      status: 'submitted',
      autoGraded: false,
    },
  ]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'warning';
      case 'submitted':
        return 'info';
      case 'graded':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Assessments
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
        >
          Create Assessment
        </Button>
      </Box>

      <Grid container spacing={3}>
        {assessments.map((assessment) => (
          <Grid item xs={12} md={6} key={assessment.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {assessment.title}
                  </Typography>
                  <Chip
                    label={assessment.status}
                    color={getStatusColor(assessment.status)}
                    size="small"
                  />
                </Box>
                <Typography color="textSecondary" variant="body2">
                  {assessment.course}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Due: {new Date(assessment.dueDate).toLocaleDateString()}
                </Typography>
                {assessment.autoGraded && (
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      Auto-Graded
                    </Typography>
                    <LinearProgress variant="determinate" value={75} />
                  </Box>
                )}
              </CardContent>
              <CardActions>
                <Button size="small">View Details</Button>
                <Button size="small">Submit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Assessment</DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <TextField fullWidth label="Title" margin="normal" />
          <TextField fullWidth label="Course" margin="normal" />
          <TextField fullWidth label="Due Date" type="date" margin="normal" />
          <TextField fullWidth label="Description" multiline rows={4} margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog} variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Assessments;
