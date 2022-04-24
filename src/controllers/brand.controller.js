const { container } = require('../config/awilix');

const brandService = container.resolve('brandService');

exports.createBrand = async (req, res) => {
  try {
    const brand = req.body;

    await brandService.create(brand);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getBrand = async (req, res) => {
  try {
    const { brandId } = req.params;

    const brand = await brandService.get(brandId);

    res.status(200).json({ success: true, brand });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getsBrand = async (req, res) => {
  try {
    console.log('merhaba');
    const allBrands = await brandService.gets();

    res.status(200).json({ success: true, allBrands });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.updateBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const data = req.body;

    await brandService.update(brandId, data);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteBrand = async (req, res) => {
  try {
    const { brandId } = req.params;

    await brandService.delete(brandId);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json(error);
  }
};
