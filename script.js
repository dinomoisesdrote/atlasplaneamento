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
