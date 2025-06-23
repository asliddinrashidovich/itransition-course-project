const Template = require('../models/template.model')
const User = require('../models/user.model')

// Create template
exports.createTemplate = async (req, res) => {
  try {
    const { title, description, topic, tags, imageUrl, access, allowedUsers } = req.body

    const template = await Template.create({
      title,
      description,
      topic,
      tags,
      imageUrl,
      access,
      allowedUsers,
      authorId: req.user.id,
    })

    res.status(201).json(template)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

// Get all public templates
exports.getPublicTemplates = async (req, res) => {
  try {
    const templates = await Template.findAll({
      where: { access: 'public' },
      include: { model: User, attributes: ['id', 'name'] },
      order: [['createdAt', 'DESC']],
    })
    res.json(templates)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Get one template (auth check if needed)
exports.getTemplateById = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id)
    if (!template) return res.status(404).json({ message: 'Not found' })

    if (
      template.access === 'restricted' &&
      template.authorId !== req.user.id &&
      !template.allowedUsers.includes(req.user.email) &&
      !req.user.isAdmin
    ) {
      return res.status(403).json({ message: 'Access denied' })
    }

    res.json(template)
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

// Delete template
exports.deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findByPk(req.params.id)
    if (!template) return res.status(404).json({ message: 'Not found' })

    if (template.authorId !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not allowed' })
    }

    await template.destroy()
    res.json({ message: 'Deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}

exports.updateTemplate = async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  try {
    const template = await Template.findByPk(id)
    if (!template) return res.status(404).json({ message: 'Not found' })

    // faqat o‘zining template bo‘lsa (yoki admin), ruxsat bering
    // if (template.userId !== req.user.id && !req.user.isAdmin) {
    //   return res.status(403).json({ message: 'Forbidden' })
    // }

    await template.update({ title, description })
    res.json({ message: 'Updated successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Server error' })
  }
}
