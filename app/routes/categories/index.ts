import express from "express";
import categoryHandlers from "../../controllers/categories"

const router = express.Router();

router.get("/", categoryHandlers.categoryQueryControllers.getAllCategories);
router.get("/:id", categoryHandlers.categoryQueryControllers.getCategoryById);
router.get("/slug/:slug", categoryHandlers.categoryQueryControllers.getCategoryBySlug);
router.get("/static/slugs", categoryHandlers.categoryQueryControllers.getCategorySlugs);

export { router as categoryRouter };