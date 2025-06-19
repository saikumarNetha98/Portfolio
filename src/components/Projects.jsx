import React from 'react';
import { Box, Typography, Chip, Grid } from '@mui/material';
import { projects } from '../constants/projects';

const Projects = () => {
    return (
        <Box id="projects" sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
                Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center" maxWidth="lg" mx="auto">
                {projects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Box
                            sx={{
                                position: 'relative',
                                bgcolor: '#fff',
                                borderRadius: 3,
                                boxShadow: 3,
                                overflow: 'hidden',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.03)',
                                    '& .overlay': {
                                        opacity: 1,
                                    },
                                },
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}
                        >
                            <Box
                                component="img"
                                src={project.image}
                                alt={project.title}
                                sx={{
                                    width: '100%',
                                    height: 220,
                                    objectFit: 'cover',
                                    backgroundColor: '#f0f0f0',
                                }}
                            />

                            <Box sx={{ p: 3, flexGrow: 1 }}>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 1 }}>
                                    {project.tags.map((tag) => (
                                        <Chip
                                            key={tag}
                                            label={tag}
                                            size="small"
                                            sx={{ bgcolor: '#eef2f5', fontWeight: 500 }}
                                        />
                                    ))}
                                </Box>

                            </Box>

                            <Box
                                className="overlay"
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    bgcolor: 'rgba(0,0,0,0.75)',
                                    color: '#fff',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    px: 3,
                                    fontSize: '0.95rem',
                                    fontWeight: 300,
                                }}
                            >
                                {project.description}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
