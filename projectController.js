const db = require('../db');

exports.getAllProjects = async (req, res) => {
  try {
    const [projects] = await db.query('SELECT * FROM projects');
    for (let project of projects) {
      const [relatedImages] = await db.query('SELECT * FROM related_images WHERE project_id = ?', [project.id]);
      project.relatedImages = relatedImages;
    }
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const [project] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
    if (project.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const [relatedImages] = await db.query('SELECT * FROM related_images WHERE project_id = ?', [req.params.id]);
    project[0].relatedImages = relatedImages;
    res.json(project[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add more controller functions for creating, updating, and deleting projects
const fs = require('fs');
const db = require('./db');

async function importData() {
  try {
    const data = JSON.parse(fs.readFileSync('photos.json', 'utf8'));
    
    for (let project of data[0]) {
      const [result] = await db.query(
        'INSERT INTO projects (imagePath, title, year, author, photographer, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [project.imagePath, project.title, project.year, project.author, project.photographer, project.description, project.coordinates.latitude, project.coordinates.longitude]
      );
      
      const projectId = result.insertId;
      
      for (let relatedImage of project.relatedImages) {
        await db.query(
          'INSERT INTO related_images (project_id, imagePath, alt) VALUES (?, ?, ?)',
          [projectId, relatedImage.imagePath, relatedImage.alt]
        );
      }
    }
    
    console.log('Data imported successfully');
  } catch (error) {
    console.error('Error importing data:', error);
  } finally {
    process.exit();
  }
}

importData();
exports.getAllProjects = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
  
      const [projects] = await db.query('SELECT * FROM projects LIMIT ? OFFSET ?', [limit, offset]);
      const [count] = await db.query('SELECT COUNT(*) as total FROM projects');
  
      res.json({
        projects,
        currentPage: page,
        totalPages: Math.ceil(count[0].total / limit),
        totalItems: count[0].total
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  