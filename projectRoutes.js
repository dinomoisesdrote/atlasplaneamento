const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);

// Add more routes for creating, updating, and deleting projects

module.exports = router;





router.get('/search', projectController.searchProjects);
exports.createProject = async (req, res) => {
    try {
      const { imagePath, title, year, author, photographer, description, latitude, longitude } = req.body;
      const [result] = await db.query(
        'INSERT INTO projects (imagePath, title, year, author, photographer, description, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [imagePath, title, year, author, photographer, description, latitude, longitude]
      );
      res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateProject = async (req, res) => {
    try {
      const { imagePath, title, year, author, photographer, description, latitude, longitude } = req.body;
      await db.query(
        'UPDATE projects SET imagePath = ?, title = ?, year = ?, author = ?, photographer = ?, description = ?, latitude = ?, longitude = ? WHERE id = ?',
        [imagePath, title, year, author, photographer, description, latitude, longitude, req.params.id]
      );
      res.json({ id: req.params.id, ...req.body });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteProject = async (req, res) => {
    try {
      await db.query('DELETE FROM projects WHERE id = ?', [req.params.id]);
      res.json({ message: 'Project deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  