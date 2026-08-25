// import { useEffect, useState } from "react";
import './Projects.css'
import projects_data from '../../assets/projects_data'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="project-container">
        {projects_data.map((project, index) => (
          <Card key={index} className="project-card" sx={{
            maxWidth: 345,
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 20px 40px rgba(193, 8, 255, 0.3)',
            }
          }}>
            <CardMedia
              component="img"
              height="180"
              image={project.w_img}
              alt={project.w_name}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div" sx={{ color: '#fff', fontWeight: 600 }}>
                {project.w_name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {project.w_desc}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '8px 16px 16px', gap: '8px' }}>
              <Button
                size="small"
                variant="contained"
                href={project.w_link}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<OpenInNewIcon />}
                sx={{
                  background: 'linear-gradient(135deg, #c108ff, #7b2ff7)',
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': { background: 'linear-gradient(135deg, #7b2ff7, #c108ff)' }
                }}
              >
                Live Link
              </Button>
              <Button
                size="small"
                variant="outlined"
                href={project.w_code}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<GitHubIcon />}
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: '#fff',
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: '#c108ff',
                    color: '#c108ff',
                    background: 'rgba(193,8,255,0.1)'
                  }
                }}
              >
                View Code
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {/* <div className="project-showmore"> */}
        {/* <p>Show More</p> */}
      {/* </div> */}
    </div>
  )
}

export default Projects
