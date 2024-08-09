const monitorController = {};
const { Monitor} = require("../models/index");

monitorController.create = async (req, res) => {
  const { name, Bio, Specialty } = req.body;

  try {
    if (!name || !Bio || !Specialty) {
      res.status(400).json({
        success: true,
        message: "Invalid Information",
      });
      return;
    }
    await Monitors.create({
      name,
      Bio,
      Specialty,
    });

    res.status(200).json({
      success: true,
      message: "Monitor created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating monitor",
      error: error.message,
    });
  }
};

monitorController.getAll = async (req, res) => {
  try {
    const monitor = await Monitors.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });
    res.status(200).json({
      success: true,
      message: "Monitor retreived successfully",
      data: monitors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived monitor",
      error: error.message,
    });
  }
};

monitorController.getById = async (req, res) => {
  const monitorId = req.params.id;

  try {
    const monitor = await Monitors.findByPk(monitorId, {
      attributes: { exclude: ['createdAt', 'updatedAt'] }
    });

   
    if (!monitor) {
      res.status(404).json({
        success: true,
        message: "Monitors not found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: monitor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreived monitor",
      error: error.message,
    });
  }
};

monitorController.update = async (req, res) => {
  const monitorId = req.params.id;
  const monitorData = req.body;

  try {
    await Monitors.update(monitorData, {
      where: {
        id: monitorId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Monitor update successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating monitor",
      error: error.message,
    });
  }
};

monitorController.delete = async (req, res) => {
  const monitorId = req.params.id;

  try {
    const deleteResult = await Monitors.destroy({
      where: {
        id: monitorId,
      },
    });

    if(deleteResult === 0) {
      res.status(404).json({
        success: true,
        message: "Monitor not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Monitor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting monitor",
      error: error.message,
    });
  }
};

module.exports = monitorController;
