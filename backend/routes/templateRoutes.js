const express = require('express')
const {
  createTemplate,
  getPublicTemplates,
  getTemplateById,
  deleteTemplate,
  updateTemplate,
} = require('../controllers/templateController')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/', getPublicTemplates)
router.get('/:id', protect, getTemplateById)
router.post('/', protect, createTemplate)
router.delete('/:id', protect, deleteTemplate)
router.put('/:id', protect, updateTemplate)


module.exports = router
